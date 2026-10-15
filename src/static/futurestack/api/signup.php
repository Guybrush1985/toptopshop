<?php
// Stores watchlist and advertiser sign-ups as JSON lines.
// Storage lives outside the web root when possible, otherwise in _private/ (blocked by .htaccess).
header('Content-Type: application/json; charset=utf-8');

function fail($code, $msg) { http_response_code($code); echo json_encode(['error' => $msg]); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'method');
$raw = file_get_contents('php://input');
if (strlen($raw) > 10000) fail(413, 'too large');
$in = json_decode($raw, true);
if (!is_array($in)) fail(400, 'invalid');
if (!empty($in['website'])) { echo json_encode(['ok' => true]); exit; } // honeypot

$kind = in_array($in['kind'] ?? '', ['watchlist', 'werben'], true) ? $in['kind'] : fail(400, 'kind');
$email = filter_var(trim($in['email'] ?? ''), FILTER_VALIDATE_EMAIL) ?: fail(400, 'email');
if (empty($in['consent'])) fail(400, 'consent');
$allowedCats = ['crm', 'helpdesk', 'design', 'seo', 'tracking', 'cms', 'pim'];
$cats = array_values(array_intersect(array_map('strval', (array)($in['categories'] ?? [])), $allowedCats));
if ($kind === 'watchlist' && !$cats) fail(400, 'categories');

$clip = function ($v, $n) { return mb_substr(trim(strip_tags((string)$v)), 0, $n); };
$record = [
  'at' => gmdate('c'),
  'kind' => $kind,
  'email' => $email,
  'categories' => $cats,
  'company' => $clip($in['company'] ?? '', 200),
  'url' => $clip($in['url'] ?? '', 300),
  'interest' => $clip($in['interest'] ?? '', 100),
  'message' => $clip($in['message'] ?? '', 2000),
  'consent' => true,
];

// Under a sub-path (e.g. toptop.shop/futurestack/) the folder two levels up can be the web root,
// so every storage folder gets its own deny rule before anything is written into it.
$dirs = [dirname(__DIR__) . '/_private', dirname(__DIR__, 2) . '/futurestack-data'];
$saved = false;
foreach ($dirs as $dir) {
  if ((is_dir($dir) || @mkdir($dir, 0750, true)) && is_writable($dir)) {
    if (!is_file($dir . '/.htaccess') && @file_put_contents($dir . '/.htaccess', "Require all denied\n") === false) continue;
    $saved = @file_put_contents($dir . '/signups.jsonl', json_encode($record, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX) !== false;
    if ($saved) break;
  }
}
// A copy by e-mail, so a redeploy that replaces the web space cannot lose a signup.
@mail('info@tanmeon.de', '=?UTF-8?B?' . base64_encode('Future Stack: ' . $kind) . '?=', json_encode($record, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "Content-Type: text/plain; charset=UTF-8\r\nFrom: info@tanmeon.de");
if (!$saved) fail(500, 'storage');
echo json_encode(['ok' => true]);

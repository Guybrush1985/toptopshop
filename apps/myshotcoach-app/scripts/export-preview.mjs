// Baut die Web-Vorschau der App und legt sie unter src/static/myshotcoach/app/ ab.
// Die Website (node build.mjs) kopiert den Ordner unverändert nach toptop.shop/myshotcoach/app/.
import { execSync } from 'node:child_process';
import { cpSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = join(dirname(fileURLToPath(import.meta.url)), '..');
const tmp = join(app, 'dist-web');
const target = join(app, '..', '..', 'src', 'static', 'myshotcoach', 'app');

rmSync(tmp, { recursive: true, force: true });
execSync(`npx expo export --platform web --output-dir ${tmp} --clear`, { cwd: app, stdio: 'inherit' });
rmSync(target, { recursive: true, force: true });
cpSync(tmp, target, { recursive: true });
rmSync(tmp, { recursive: true, force: true });
// Unterseiten der App (z. B. /myshotcoach/app/trainer/lena) beim Neuladen auf die App umleiten
writeFileSync(join(target, '.htaccess'), `Options -Indexes
AddDefaultCharset utf-8
ErrorDocument 404 /myshotcoach/app/index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /myshotcoach/app/
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
<IfModule mod_headers.c>
  Header set X-Robots-Tag "noindex, nofollow"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`);
console.log('Web-Vorschau liegt in', target);

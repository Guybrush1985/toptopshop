// Sends watchlist and advertiser forms to api/signup.php and shows the result inline.
// Where the host runs no PHP (static hosting), the form falls back to a prepared e-mail.
(function () {
  var form = document.querySelector('form.signup');
  if (!form) return;
  var msg = form.querySelector('.form-msg');
  var pre = new URLSearchParams(location.search).get('kategorie');
  if (pre) form.querySelectorAll('input[name="categories"]').forEach(function (c) { if (c.value === pre) c.checked = true; });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var payload = { kind: form.dataset.kind, categories: fd.getAll('categories') };
    fd.forEach(function (v, k) { if (k !== 'categories') payload[k] = v; });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email || '')) return show('Bitte geben Sie eine gültige E-Mail-Adresse an.', true);
    if (form.dataset.kind === 'watchlist' && !payload.categories.length) return show('Bitte wählen Sie mindestens eine Kategorie.', true);
    if (!payload.consent) return show('Bitte bestätigen Sie die Einwilligung.', true);
    form.querySelector('button').disabled = true;
    fetch(form.getAttribute('action'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.j && res.j.error);
        form.reset();
        show(form.dataset.kind === 'watchlist' ? 'Danke! Sie sind vorgemerkt. Wir melden uns, sobald die Watchlist startet.' : 'Danke! Wir melden uns innerhalb von zwei Werktagen.', false);
      })
      .catch(function () { mailFallback(payload); })
      .finally(function () { form.querySelector('button').disabled = false; });
  });

  function mailFallback(p) {
    var to = form.dataset.mail;
    if (!to) return show('Das hat leider nicht geklappt. Bitte versuchen Sie es später noch einmal.', true);
    var labels = p.categories.map(function (v) { var c = form.querySelector('input[name="categories"][value="' + v + '"]'); return c ? c.parentNode.textContent.trim() : v; });
    var subject = form.dataset.kind === 'watchlist' ? 'Watchlist vormerken' : 'Anfrage: ' + (p.interest || 'Werben auf Future Stack');
    var lines = ['E-Mail: ' + p.email];
    if (labels.length) lines.push('Kategorien: ' + labels.join(', '));
    ['company', 'url', 'interest', 'message'].forEach(function (k) { if (p[k]) lines.push(({ company: 'Firma/Produkt', url: 'Website', interest: 'Interesse', message: 'Nachricht' })[k] + ': ' + p[k]); });
    lines.push('', 'Ich bin einverstanden, dass Future Stack meine Angaben speichert, um mich zu kontaktieren.');
    location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    show('Ihr E-Mail-Programm öffnet sich mit einer fertigen Nachricht an ' + to + '. Bitte senden Sie sie ab, dann sind Sie vorgemerkt.', false);
  }

  function show(text, isError) { msg.textContent = text; msg.className = 'form-msg ' + (isError ? 'err' : 'ok'); }
})();

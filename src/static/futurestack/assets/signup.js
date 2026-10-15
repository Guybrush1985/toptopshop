// Sends watchlist and advertiser forms to api/signup.php and shows the result inline.
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
      .catch(function () { show('Das hat leider nicht geklappt. Bitte versuchen Sie es später noch einmal.', true); })
      .finally(function () { form.querySelector('button').disabled = false; });
  });

  function show(text, isError) { msg.textContent = text; msg.className = 'form-msg ' + (isError ? 'err' : 'ok'); }
})();

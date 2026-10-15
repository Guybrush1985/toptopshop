// Kostenrechner: compares the total cost of the current SaaS tool with each alternative.
(function () {
  var root = document.getElementById('sparrechner');
  if (!root) return;
  var data = JSON.parse(root.querySelector('.calc-data').textContent);
  var out = root.querySelector('.calc-result');
  var inputs = {};
  root.querySelectorAll('[data-calc]').forEach(function (el) { inputs[el.dataset.calc] = el; });
  var d = data.defaults;
  inputs.users.value = d.users;
  inputs.years.value = d.years;
  inputs.ops.value = d.selfHostOpsPerMonth;
  inputs.migration.value = d.migrationOneTime;
  var incumbentEdited = false;

  function monthly(price, users) {
    if (!price) return null;
    var m;
    if (price.model === 'per_user') m = price.amount * users;
    else if (price.model === 'base_plus_user') m = price.amount + (price.extraUser || 0) * Math.max(0, users - 1);
    else m = price.amount;
    if (price.capMonth != null) m = Math.min(m, price.capMonth);
    return m;
  }
  function num(el, fallback) { var v = parseFloat(el.value); return isFinite(v) && v >= 0 ? v : fallback; }
  function eur(n) { return Math.round(n).toLocaleString('de-DE') + ' €'; }

  function render() {
    var users = Math.max(1, Math.round(num(inputs.users, d.users)));
    var years = Math.max(1, Math.round(num(inputs.years, d.years)));
    var months = years * 12;
    if (!incumbentEdited) {
      var listMonthly = monthly(data.tool.price, users);
      inputs.incumbent.value = listMonthly != null ? Math.round(listMonthly * 100) / 100 : '';
    }
    var incMonthly = num(inputs.incumbent, NaN);
    var ops = num(inputs.ops, d.selfHostOpsPerMonth);
    var migration = num(inputs.migration, d.migrationOneTime);
    if (!isFinite(incMonthly)) {
      out.innerHTML = '<p class="calc-hint">Tragen Sie ein, was ' + data.tool.name + ' Sie heute im Monat kostet. Dann sehen Sie die Kosten jeder Alternative im Vergleich.</p>';
      return;
    }
    var incTotal = incMonthly * months + (incumbentEdited ? 0 : (data.tool.price && data.tool.price.setup) || 0);
    var rows = [];
    data.alternatives.forEach(function (a) {
      var p = a.price;
      if (a.priceOnRequest) {
        rows.push({ name: a.name, way: 'Preis auf Anfrage', total: null });
      } else if (p && p.amount > 0) {
        rows.push({ name: a.name, way: 'Cloud-Abo', total: monthly(p, users) * months + migration });
        if (a.selfHost) rows.push({ name: a.name, way: 'Selbst gehostet', total: ops * months + migration });
      } else if (p && (a.desktop || !a.selfHost)) {
        rows.push({ name: a.name, way: 'Kostenlos nutzbar', total: migration });
      } else if (a.selfHost) {
        rows.push({ name: a.name, way: 'Selbst gehostet', total: ops * months + migration });
      } else {
        rows.push({ name: a.name, way: 'Preis auf Anfrage', total: null });
      }
    });
    rows.sort(function (x, y) { return (x.total == null) - (y.total == null) || x.total - y.total; });
    var best = rows.filter(function (r) { return r.total != null; })[0];
    var html = '<p class="calc-headline">' + data.tool.name + ': <strong>' + eur(incTotal) + '</strong> in ' + years + (years === 1 ? ' Jahr' : ' Jahren') + '.';
    if (best && incTotal - best.total > 0) html += ' ' + best.name + ' (' + best.way + '): <strong>' + eur(best.total) + '</strong>, also ' + eur(incTotal - best.total) + ' weniger in dieser Modellrechnung.';
    html += '</p><div class="bars">';
    var max = Math.max.apply(null, [incTotal].concat(rows.map(function (r) { return r.total || 0; }))) || 1;
    function bar(name, way, total, cls, save) {
      var w = total == null ? 0 : Math.max(1.5, total / max * 100);
      return '<div class="bar-row ' + cls + '"><div class="bar-label"><strong>' + name + '</strong><span>' + way + '</span></div>' +
        '<div class="bar-track"><span class="bar-fill" style="width:' + w.toFixed(1) + '%"></span></div>' +
        '<div class="bar-val">' + (total == null ? 'auf Anfrage' : eur(total)) + (save != null ? '<small class="' + (save >= 0 ? 'pos' : 'neg') + '">' + (save >= 0 ? '−' + Math.round(save / incTotal * 100) + ' %' : '+' + Math.round(-save / incTotal * 100) + ' %') + '</small>' : '') + '</div></div>';
    }
    html += bar(data.tool.name, 'Heute', incTotal, 'bar-old', null);
    rows.forEach(function (r) { html += bar(r.name, r.way, r.total, 'bar-new', r.total == null ? null : incTotal - r.total); });
    out.innerHTML = html + '</div>';
  }

  inputs.incumbent.addEventListener('input', function () { incumbentEdited = inputs.incumbent.value !== ''; render(); });
  ['users', 'years', 'ops', 'migration'].forEach(function (k) { inputs[k].addEventListener('input', render); });
  render();
})();

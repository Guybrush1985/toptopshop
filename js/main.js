(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  /** Baut einen Amazon-Link mit Partner-Tag (Produktseite per ASIN oder Suche). */
  function amazonUrl(product) {
    var base = "https://" + (config.AMAZON_DOMAIN || "www.amazon.de");
    var url;
    if (product.asin) {
      url = new URL(base + "/dp/" + encodeURIComponent(product.asin));
    } else {
      url = new URL(base + "/s");
      url.searchParams.set("k", product.query || product.name);
    }
    if (config.AMAZON_PARTNER_TAG) {
      url.searchParams.set("tag", config.AMAZON_PARTNER_TAG);
    }
    return url.toString();
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === "text") node.textContent = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) { node.appendChild(child); });
    return node;
  }

  function categoryById(id) {
    return (window.CATEGORIES || []).filter(function (c) { return c.id === id; })[0];
  }

  function productCard(product) {
    var category = categoryById(product.category) || {};
    var media = el("div", { class: "card-media", "aria-hidden": "true", text: category.icon || "☀️" });
    if (product.badge) media.appendChild(el("span", { class: "badge", text: product.badge }));

    var body = el("div", { class: "card-body" }, [
      el("span", { class: "card-category", text: category.name || "" }),
      el("h3", { text: product.name }),
      el("p", { text: product.text }),
      el("a", {
        class: "btn btn-amazon",
        href: amazonUrl(product),
        target: "_blank",
        rel: "sponsored nofollow noopener",
        text: "Bei Amazon ansehen*",
      }),
    ]);
    return el("article", { class: "card" }, [media, body]);
  }

  // ---------- Kategorie-Kacheln ----------
  function renderCategories() {
    var grid = document.getElementById("category-grid");
    if (!grid) return;
    (window.CATEGORIES || []).forEach(function (c) {
      var count = window.PRODUCTS.filter(function (p) { return p.category === c.id; }).length;
      var tile = el("a", { class: "category-tile", href: "#produkte", "data-category": c.id }, [
        el("span", { class: "category-icon", "aria-hidden": "true", text: c.icon }),
        el("h3", { text: c.name }),
        el("p", { text: c.text }),
        el("span", { class: "category-count", text: count + " Produkte" }),
      ]);
      tile.addEventListener("click", function () { setFilter(c.id); });
      grid.appendChild(tile);
    });
  }

  // ---------- Produktliste mit Filter & Suche ----------
  var state = { category: "alle", search: "" };

  function renderFilters() {
    var bar = document.getElementById("filter-bar");
    if (!bar) return;
    var all = [{ id: "alle", name: "Alle", icon: "🔎" }].concat(window.CATEGORIES || []);
    all.forEach(function (c) {
      var btn = el("button", { type: "button", class: "chip", "data-category": c.id, text: c.icon + " " + c.name });
      btn.addEventListener("click", function () { setFilter(c.id); });
      bar.appendChild(btn);
    });
  }

  function setFilter(categoryId) {
    state.category = categoryId;
    renderProducts();
  }

  function renderProducts() {
    var grid = document.getElementById("product-grid");
    if (!grid) return;

    document.querySelectorAll("#filter-bar .chip").forEach(function (chip) {
      var active = chip.getAttribute("data-category") === state.category;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var term = state.search.trim().toLowerCase();
    var list = window.PRODUCTS.filter(function (p) {
      if (state.category !== "alle" && p.category !== state.category) return false;
      if (!term) return true;
      return (p.name + " " + p.text).toLowerCase().indexOf(term) !== -1;
    });

    grid.innerHTML = "";
    list.forEach(function (p) { grid.appendChild(productCard(p)); });

    var empty = document.getElementById("empty-state");
    if (empty) empty.hidden = list.length > 0;
  }

  function initSearch() {
    var input = document.getElementById("product-search");
    if (!input) return;
    input.addEventListener("input", function () {
      state.search = input.value;
      renderProducts();
    });
  }

  // ---------- Allgemein ----------
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initSiteName() {
    document.querySelectorAll("[data-site-name]").forEach(function (node) {
      node.textContent = config.SITE_NAME || node.textContent;
    });
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSiteName();
    initNav();
    if (window.PRODUCTS) {
      renderCategories();
      renderFilters();
      initSearch();
      renderProducts();
      // Anker (#produkte) erst nach dem Rendern ansteuern, damit die Position stimmt.
      var target = location.hash && document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  });
})();

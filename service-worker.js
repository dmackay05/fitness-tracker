// ═══════════════════════════════════════════════════════════════════════
// DAVID'S HEALTH SUITE — service worker  (v3: network-first shell)
//
// Strategy:
//   • Navigations (index.html): NETWORK FIRST — you always get the newest
//     deploy when online; the cached copy is only used offline.
//   • Static assets (fonts, etc.): cache-first for speed.
//   • skipWaiting + clients.claim: a new worker takes over immediately
//     instead of waiting for every tab/app instance to close.
//
// Bump CACHE_VERSION any time you want to force-flush old caches.
// (Any byte change to this file triggers the update cycle on next launch.)
// ═══════════════════════════════════════════════════════════════════════

var CACHE_VERSION = "suite-v151";

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cache.addAll(["./", "./index.html"]).catch(function () {});
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE_VERSION) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  // The app shell: network first, cache fallback (offline support)
  if (req.mode === "navigate" || req.destination === "document") {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_VERSION).then(function (c) { c.put("./index.html", copy); });
        return res;
      }).catch(function () {
        return caches.match("./index.html").then(function (hit) {
          return hit || caches.match("./");
        });
      })
    );
    return;
  }

  // Same-origin static assets: cache first, then network (and cache it)
  if (new URL(req.url).origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE_VERSION).then(function (c) { c.put(req, copy); });
          return res;
        });
      })
    );
  }
  // Cross-origin (Google Fonts, USDA API, Apps Script): pass through untouched
});

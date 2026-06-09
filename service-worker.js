const CACHE = 'health-tracker-v6';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{}))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                          // never touch POSTs (pushes to Sheet)
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;                // let Google Sheets calls hit the network
  if (req.mode === 'navigate') {                             // network-first for the app page (gets updates)
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
                .catch(() => caches.match(req).then(m => m || caches.match('./index.html')))
    );
    return;
  }
  e.respondWith(                                             // cache-first for static assets
    caches.match(req).then(m => m || fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; }).catch(() => m))
  );
});

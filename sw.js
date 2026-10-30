/* Cosmos to Core service worker: makes the app work offline. */
const VERSION = 'c2c-b1d8967b09';
const ASSETS = [
 "apple-touch-icon.png",
 "config.js",
 "favicon-48.png",
 "icon-192.png",
 "icon-512.png",
 "icon-maskable-512.png",
 "index.html",
 "manifest.webmanifest"
];
const FRESH = ['./', 'index.html', 'config.js'];   // checked online first so updates arrive
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(['./'].concat(ASSETS))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('c2c-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
function timeout(ms, p) { return new Promise((res, rej) => { const t = setTimeout(() => rej(new Error('timeout')), ms); p.then(v => { clearTimeout(t); res(v); }, err => { clearTimeout(t); rej(err); }); }); }
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;            // NYSED PDFs etc. go straight to the network
  const rel = url.pathname.slice(new URL(self.registration.scope).pathname.length) || './';
  const fresh = req.mode === 'navigate' || FRESH.includes(rel);
  if (fresh) {
    e.respondWith(timeout(4000, fetch(req)).then(r => { if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req.mode === 'navigate' ? './' : req, cp)); } return r; })
      .catch(() => caches.match(req.mode === 'navigate' ? './' : req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(n => { if (n.ok) { const cp = n.clone(); caches.open(VERSION).then(c => c.put(req, cp)); } return n; })));
});

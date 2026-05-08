const V = 'jr-v2';
const A = ['/', '/index.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c=>c.addAll(A))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).catch(()=>c))); });

const CACHE_NAME = 'ticaisse-v2';
const ASSETS = [
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});
// Stratégie : réseau d'abord (pour avoir les mises à jour), puis cache si hors-ligne
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        const respClone = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, respClone));
        return resp;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});

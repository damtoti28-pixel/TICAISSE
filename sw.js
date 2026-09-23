const CACHE_NAME = 'caisse-ajkt-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/logo-ajkt.png'
];

// Installation : force la prise en compte immédiate
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .catch(() => {})
  );
});

// Activation : nettoie TOUS les anciens caches (évite le message "version trop ancienne")
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Stratégie : réseau d'abord, cache en secours (mise à jour rapide)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Ne pas mettre en cache les requêtes vers Firebase ou externes
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return; // laisser le navigateur gérer
  }

  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        // Mettre à jour le cache seulement si la réponse est OK
        if (resp && resp.status === 200) {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, respClone));
        }
        return resp;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          return cached || caches.match('./index.html');
        })
      )
  );
});


self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Instalando...');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

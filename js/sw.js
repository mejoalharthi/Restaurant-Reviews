let static_cacheName = "Restaurant-static-v1";

self.addEventLeistener('install', function(event) {
  event.waitUntil(
    caches.open(static_cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'js/RegisterServiceWorker.js',
        'index.html',
        'restaurant.html'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheName) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('Restaurant-') &&
            cacheName != static_cacheName;
        }).map(function(cacheName) {
          return cache.delete(cacheName);
        })
      );
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

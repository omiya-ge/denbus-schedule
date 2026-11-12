const CACHE_NAME = "bus-timetable-v6";
const APP_SHELL_FILES = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "src/favicon.ico",
  "src/denbus_logo.svg",
  "src/icons/icon-192.png",
  "src/icons/icon-512.png",
  "src/icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL_FILES))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
});

// ネットワーク優先。つながらないときだけキャッシュを返す
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request, { ignoreSearch: true }).then(
        (cached) => cached || caches.match("index.html")
      )
    )
  );
});

const CACHE_NAME = "bus-timetable-v4";
const APP_SHELL_FILES = [
  ".",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "src/favicon.ico",
  "src/denbus_logo.svg",
  "src/icons/icon-192.png",
  "src/icons/icon-512.png",
  "src/icons/maskable-192.png",
  "src/icons/maskable-512.png",
  "src/icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    ).then(() => self.clients.claim())
  );
});

const isSameOriginGetRequest = (request) =>
  request.method === "GET" && new URL(request.url).origin === self.location.origin;

const isNavigationRequest = (request) => request.mode === "navigate";

const fetchAndUpdateCache = async (request) => {
  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (!isSameOriginGetRequest(request)) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        return await fetchAndUpdateCache(request);
      } catch (error) {
        const cached = await caches.match(request);
        if (cached) return cached;

        if (isNavigationRequest(request)) {
          return caches.match("index.html");
        }

        throw error;
      }
    })()
  );
});

const CACHE_NAME = 'rheumlab-static-v20260308';
const APP_SHELL = [
  './index.html',
  './module.html',
  './manifest.webmanifest',
  './css/base.css',
  './css/cases.css',
  './css/components.css',
  './css/hub.css',
  './css/layout.css',
  './css/print.css',
  './css/variables.css',
  './js/app.js',
  './js/cases.js',
  './js/diagnosis-guide.js',
  './js/hub.js',
  './js/navigation.js',
  './js/primer.js',
  './js/progress.js',
  './js/pwa.js',
  './js/quiz.js',
  './js/renderers.js',
  './js/data/ana-antibodies.js',
  './js/data/ana-cases.js',
  './js/data/ana-clues.js',
  './js/data/ana-diseases.js',
  './js/data/ana-myths.js',
  './js/data/ana-positivity.js',
  './js/data/ana-quiz.js',
  './js/data/ana-summaries.js',
  './js/data/anca-antibodies.js',
  './js/data/anca-cases.js',
  './js/data/anca-diseases.js',
  './js/data/anca-myths.js',
  './js/data/anca-quiz.js',
  './js/data/anca-summaries.js',
  './js/data/joints-cases.js',
  './js/data/joints-diseases.js',
  './js/data/joints-markers.js',
  './js/data/joints-myths.js',
  './js/data/joints-patterns.js',
  './js/data/joints-quiz.js',
  './js/data/joints-summaries.js',
  './js/data/patterns.js',
  './assets/fonts/ibm-plex-mono-400.woff2',
  './assets/fonts/ibm-plex-mono-600.woff2',
  './assets/fonts/space-grotesk-300.woff2',
  './assets/fonts/space-grotesk-600.woff2',
  './assets/pwa/apple-touch-icon.png',
  './assets/pwa/icon-64.png',
  './assets/pwa/icon-192.png',
  './assets/pwa/icon-512.png',
  './assets/pwa/icon-maskable-512.png'
];

function toAbsoluteUrl(path) {
  return new URL(path, self.registration.scope).toString();
}

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(APP_SHELL.map(toAbsoluteUrl));
}

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter(name => name.startsWith('rheumlab-static-') && name !== CACHE_NAME)
      .map(name => caches.delete(name))
  );
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request, { ignoreSearch: true });
  if (cachedResponse) return cachedResponse;

  const networkResponse = await fetch(request);
  if (networkResponse.ok && request.method === 'GET') {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
  }
  return networkResponse;
}

async function handleNavigation(request) {
  try {
    return await cacheFirst(request);
  } catch {
    const url = new URL(request.url);
    const isModulePage = url.pathname.endsWith('/module.html') || url.pathname.endsWith('module.html');
    const fallbackPath = isModulePage ? './module.html' : './index.html';
    return caches.match(toAbsoluteUrl(fallbackPath), { ignoreSearch: true });
  }
}

self.addEventListener('install', event => {
  event.waitUntil(
    precache().then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    cleanupOldCaches().then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(
    cacheFirst(request).catch(() => caches.match(request, { ignoreSearch: true }))
  );
});

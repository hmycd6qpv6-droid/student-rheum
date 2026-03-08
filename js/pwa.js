export function registerPWA() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', () => {
    const serviceWorkerUrl = new URL('../service-worker.js', import.meta.url);
    navigator.serviceWorker.register(serviceWorkerUrl).catch(() => {
      // Ignore registration failures so the app still works as a regular site.
    });
  });
}

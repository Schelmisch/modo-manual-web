// Service worker mínimo: hace la web instalable como app, SIN cachear
// (así nunca sirve una versión vieja tras un despliegue).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* passthrough: red directa */ });

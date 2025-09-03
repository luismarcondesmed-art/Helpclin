const CACHE_NAME = 'med-guide-ps-v2'; // A versão do cache foi atualizada
const urlsToCache = [
  '/',
  './index.html',
  './manifest.webmanifest',
  // Recursos externos que precisam ser cacheados para uso offline
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide-react@0.294.0/dist/lucide-react.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Instala o service worker e armazena os recursos chave em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Armazenando o App Shell em cache');
        // Usa addAll para buscar e armazenar todos os recursos. É uma operação atômica.
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Falha ao armazenar em cache durante a instalação:', error);
      })
  );
});

// Serve o conteúdo do cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se uma resposta for encontrada no cache, a retorna
        if (response) {
          return response;
        }
        // Se não for encontrada no cache, busca na rede
        return fetch(event.request);
      })
  );
});

// Limpa caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


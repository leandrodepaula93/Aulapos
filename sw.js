//registrar 2 constante - versao do cache - url offlinee
const OFFLINE_URL = 'offline.html';
const CACHE_NAME = 'v1';

//instalacao do sw - guardar os arquivos em cache
this.addEventListener('install', function(event){
  //add os aquivos do cache
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll([
        'css/style.css',
        'imgs/logo.png',
        'imgs/icon-128.png',
        'imgs/icon-256.png',
        'imgs/offline.png',
        'offline.html',
        'manifest.json'
      ])
    })
  )
  console.log("Arquivos em cache");
})
const CACHE="penelope-x-network-first-v10.4.0";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return;

  const isAppShell =
    e.request.mode==="navigate" ||
    u.pathname.endsWith("/index.html") ||
    u.pathname.endsWith("/app.js") ||
    u.pathname.endsWith("/styles.css") ||
    u.pathname.endsWith("/manifest.webmanifest");

  if(isAppShell){
    e.respondWith(
      fetch(e.request,{cache:"no-store"})
        .then(r=>{
          const cp=r.clone();
          caches.open(CACHE).then(c=>c.put(e.request,cp));
          return r;
        })
        .catch(()=>caches.match(e.request).then(c=>c||caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
      const cp=r.clone();
      caches.open(CACHE).then(cache=>cache.put(e.request,cp));
      return r;
    }))
  );
});

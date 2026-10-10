// 只缓存随项目提供的静态资源，不缓存练习记录或家长替代音频。
const CACHE_PREFIX = 'pinyin-static-harper-' + encodeURIComponent(self.registration.scope) + '-';
const CACHE = CACHE_PREFIX + '20261010-r3';
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const manifest=await fetch(new URL('audio-manifest.json',self.registration.scope),{cache:'reload'}).then(r=>r.json());
  const urls=['./','index.html','assets/app.js','assets/style.css','assets/icon.svg','manifest.webmanifest','audio-manifest.json','docs/家长使用说明.md','docs/AUDIO_SOURCES.md',...Object.values(manifest.syllables).map(x=>x.file)].map(path=>new URL(path,self.registration.scope).href);
  await (await caches.open(CACHE)).addAll(urls);await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(CACHE_PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('message',event=>{if(event.data==='offline-ready')event.ports[0]?.postMessage({ready:true});});
async function cachedResponse(request, hit) {
  const range = request.headers.get('Range');
  if (!range || !new URL(request.url).pathname.endsWith('.mp3')) return hit;
  const bytes = new Uint8Array(await hit.arrayBuffer());
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  let start = 0, end = bytes.length - 1;
  if (match && (match[1] || match[2])) {
    if (match[1]) { start = Number(match[1]); if (match[2]) end = Math.min(Number(match[2]), end); }
    else start = Math.max(0, bytes.length - Number(match[2]));
  } else start = bytes.length;
  if (start >= bytes.length || end < start) return new Response(null, {status:416, headers:{'Content-Range':`bytes */${bytes.length}`}});
  return new Response(bytes.slice(start, end + 1), {status:206, headers:{
    'Content-Type':hit.headers.get('Content-Type') || 'audio/mpeg',
    'Content-Length':String(end - start + 1), 'Accept-Ranges':'bytes',
    'Content-Range':`bytes ${start}-${end}/${bytes.length}`
  }});
}
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);if(url.origin!==self.location.origin||event.request.method!=='GET'||url.pathname.startsWith('/__'))return;
  event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(event.request);return response;}catch{const hit=await cache.match(event.request,{ignoreSearch:true,ignoreVary:true});if(hit)return cachedResponse(event.request,hit);throw Error('该资源尚未准备到本地');}})());
});

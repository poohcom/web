// sw.js — no caching, just for install banner support
self.addEventListener('install', event => {
  self.skipWaiting(); // 바로 활성화
});
self.addEventListener('activate', event => {
  // 아무 작업도 하지 않음
});
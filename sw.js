self.addEventListener('fetch', (event) => {
    // 基础版不强制缓存，仅确保 PWA 校验通过
    event.respondWith(fetch(event.request));
});

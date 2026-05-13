self.addEventListener('install', e => {
  console.log('PWA instalado');
});

self.addEventListener('fetch', e => {});

self.addEventListener('push', event => {

  const data = event.data.json();

  self.registration.showNotification(
    data.title,
    {
      body: data.body,
      icon: '/logo-192.png',
      badge: '/logo-192.png',
      vibrate: [200,100,200],
      sound: '/notify.mp3'
    }
  );

});

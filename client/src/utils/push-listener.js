self.addEventListener('push', event => {
  const data = event.data.json();
  const { title } = data;

  const body = {
    body: data.body,
    icon: data.icon,
  };

  event.waitUntil(self.registration.showNotification(title, body));
});

import { convertVapidKey } from './convert-vapid-key';

const subscribePush = async () => {
  const VapidKey = process.env.REACT_APP_PUBLIC_VAPID_KEY;
  const convertedVapidKey = convertVapidKey(VapidKey);

  console.log('register start');

  const registration = await navigator.serviceWorker.register(
    '/push-listener.js',
  );

  console.log('register finished');

  await navigator.serviceWorker.ready;

  console.log('serviceworker readied');

  if (!registration.pushManager) {
    alert('Push Unsupported');
    return;
  }

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey,
  });

  console.log(`subscription readied`);

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}/users/1/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    },
  );

  const User = await response.json();
  console.log(User);

  console.log(`well subscribed`);
};

export default subscribePush;

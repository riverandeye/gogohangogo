const unsubscribePush = async () => {
  console.log('unsubscribe!');
  const registration = await navigator.serviceWorker.ready;

  if (!registration) {
    console.log('no serviceWorker');
    return;
  }

  console.log(registration.pushManager);
  const subscription = await registration.pushManager.getSubscription();

  if (!subscription) {
    console.log('no push subscription');
    return;
  }

  await subscription.unsubscribe();

  const result = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}/users/1/unsubscribe`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  console.log(result);
};

export default unsubscribePush;

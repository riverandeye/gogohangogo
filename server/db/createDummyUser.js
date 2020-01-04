const range = n => Array.from(Array(n).keys());

const generateDummyImageURL = size => {
  const getDummyImageURL = id => `https://picsum.photos/id/${id}/200/300`;
  return range(size).map(getDummyImageURL);
};

const createDummyUser = () => {
  const avatars = generateDummyImageURL(1000);
  avatars.map((img, idx) => {
    console.log(`insert into Users (id, name, email, avatar, password, authKey, agreeAlarm, alarmSubscription, priority, isValid) values('${idx +
      1}', 'user${idx +
      1}', 'riverandeye@gmail.com', '${img}', 'DEFAULT', '123', NULL, NULL, NULL, NULL);
  `);
  });
};

createDummyUser();

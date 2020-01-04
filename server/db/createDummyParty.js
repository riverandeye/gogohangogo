const range = n => Array.from(Array(n).keys());

const partyStatus = [0, 1, 2, 3, 4];

const ServiceId = [1, 2, 3, 4];
const ServiceCapacity = [4, 4, 10, 4];

const range2 = (a, b) => {
  const ret = [];

  for (let i = a; i < a + b; i++) {
    ret.push(i);
  }

  return ret;
};

let userIdx = 1;

const createDummyParty = () => {
  const allCase = range(100);

  allCase.map(val => {
    const serviceId = Math.floor(Math.random() * 4 + 1);
    const serviceCapacity = ServiceCapacity[serviceId - 1];
    const currentPersonnel = Math.floor(Math.random() * serviceCapacity + 1);

    let partyStatus;

    if (currentPersonnel === 1) {
      partyStatus = Math.floor(Math.random() * 2);
    } else if (currentPersonnel < serviceCapacity) {
      partyStatus = 1;
    } else {
      partyStatus = Math.floor(Math.random() * 3 + 2);
    }

    console.log(' ');
    console.log(
      `insert into Parties (id, createdAt, updatedAt, startAt, endAt, status, title, personnel, capacity, account, authKey, isAccountValid, serviceId) values('${val +
        1}', NOW(), NOW(), NULL, NULL, '${partyStatus}', '${val +
        1} hello', '${currentPersonnel}', '${serviceCapacity}', 'dummy@naver.com', 'thisisAuthKey${val}', '1', '${serviceId}');`,
    );

    const members = range2(userIdx, currentPersonnel);
    userIdx += currentPersonnel;

    members.map((memberId, idx) => {
      const isAdmin = idx === 0 ? 1 : 0;
      console.log(
        `insert into UserParties(userId, partyId, createdAt, updatedAt, startedAt, endAt, isDeposited, isAdmin) values('${memberId}', '${val +
          1}', NOW(), NOW(), NULL, NULL, '${Math.floor(
          Math.random() * 2,
        )}', '${isAdmin}');`,
      );
    });
  });
};

createDummyParty();

import UserStore from './user';

const RootStore = () => {
  const user = new UserStore();

  return { user };
};

export default RootStore;

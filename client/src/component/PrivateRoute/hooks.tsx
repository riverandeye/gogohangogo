import RootStore from '../../stores/root';

export const useUserStore = () => {
  const { user } = RootStore();
  return { user };
};

import { useEffect, useState } from 'react';
import cookies from 'react-cookies';

export const useCheckLogin = () => {
  const [user, setUser] = useState({
    id: 1,
  });

  useEffect(() => {
    const userCookie = cookies.load('user');

    if (!userCookie) {
      window.location.replace('/');
    }

    setUser(userCookie);
  }, []);

  return user;
};

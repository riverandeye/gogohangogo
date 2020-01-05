import { useState, useEffect } from 'react';
import cookies from 'react-cookies';

export const useCookieUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userCookie = cookies.load('user');

    if (!userCookie) {
      window.location.replace('/');
    }

    if (window.location.href === `http://localhost:3000/`) {
      window.location.replace('/main');
    }

    setUser(userCookie);
  }, []);

  return user;
};

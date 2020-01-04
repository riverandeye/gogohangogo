import { useState, useEffect } from 'react';
import Axios from 'axios';
import { MyPartyUser } from './dto/my-party-user';

export const useMyPartyUser = (id: number) => {
  const [userData, setUserData] = useState(
    new MyPartyUser(id, '', '', '', '', 0, true, 0),
  );

  useEffect(() => {
    const getUser = async () => {
      const response = await Axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/users/${id}`,
      );

      const user = response.data;

      setUserData(user);
    };

    getUser();
  }, []);

  return {
    userData,
  };
};

const isMyParty = (id, party) => {
  return id === party.adminUserId;
};

const isNotMyParty = (id, party) => {
  return id !== party.adminUserId;
};

export const useMyParties = (id: number) => {
  const [userPartiesData, setUserPartiesData] = useState([]);

  useEffect(() => {
    const getUserParties = async () => {
      const response = await Axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/users/${id}/parties`,
      );

      const parties = response.data;
      setUserPartiesData(parties);
    };

    getUserParties();
  }, []);

  const usersParty = userPartiesData.filter(party => isMyParty(id, party));
  const notUsersParty = userPartiesData.filter(party =>
    isNotMyParty(id, party),
  );

  return {
    usersParty,
    notUsersParty,
  };
};

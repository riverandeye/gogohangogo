import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';
import Layout from '../../component/Layout';
import ParticipantCard from '../../component/ParticipantCard';
import PartyStatus from '../../component/PartyStatus';

interface PartyDetailProps {
  match: any;
}

const PartyDetail: React.FC<PartyDetailProps> = ({ match }) => {
  const [state, setState] = useState({
    party: { adminUserId: 0, status: 0 },
    userList: [],
  });
  useEffect(() => {
    const userListPromise = axios.get(
      `${process.env.REACT_APP_BACKEND_HOST}/parties/${match.params.id}/users`,
    );
    const partyPromise = axios.get(
      `${process.env.REACT_APP_BACKEND_HOST}/parties/${match.params.id}`,
    );

    Promise.all([partyPromise, userListPromise]).then(
      ([partyResponse, userListResponse]) => {
        setState({
          party: partyResponse.data,
          userList: userListResponse.data,
        });
      },
    );
  }, []);
  console.log(state.party);
  return (
    <Layout>
      <S.PartyDetail>
        <S.PartyInformation>
          <img
            src="/static/media/netflix.46d91517.png"
            alt="ott"
            width="300rem"
            height="300rem"
          />
          <PartyStatus status={state.party.status} />
        </S.PartyInformation>
        <S.ParticipantList>
          {state.userList.map(user => {
            user.isAdmin = user.id === state.party.adminUserId;
            return <ParticipantCard {...user} />;
          })}
        </S.ParticipantList>
      </S.PartyDetail>
    </Layout>
  );
};

export default PartyDetail;

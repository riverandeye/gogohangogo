import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';
import Layout from '../../component/Layout';
import ParticipantCard from '../../component/ParticipantCard';
import PartyStatus from '../../component/PartyStatus';
import Spinner from '../../component/Spinner';

interface PartyDetailProps {
  match: any;
}

const PartyDetail: React.FC<PartyDetailProps> = ({ match }) => {
  const [state, setState] = useState({
    party: { adminUserId: 0, status: -1, avatar: '', title: '' },
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
  if (state.party.status === -1) return <Spinner visible />;
  return (
    <Layout>
      <S.PartyDetail>
        <S.PartyInformation>
          <S.LogoAndState>
            <img
              src={state.party.avatar}
              alt="ott"
              width="100%"
              height="100%"
            />
            <PartyStatus status={state.party.status} />
          </S.LogoAndState>
          <S.PartyInformationTexts>{state.party.title}</S.PartyInformationTexts>
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

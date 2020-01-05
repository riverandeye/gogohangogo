import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import * as S from './styles';
import Layout from '../../component/Layout';
import ParticipantCard from '../../component/ParticipantCard';
import PartyStatus from '../../component/PartyStatus';
import Spinner from '../../component/Spinner';
import Button from '../../component/Button';
import { dummy } from '../../constants';
import Axios from 'axios';

interface PartyDetailProps {
  match: any;
}

const PartyDetail: React.FC<PartyDetailProps> = ({ match }) => {
  const [requestState, setRequestState] = useState({
    loading: false,
    done: false,
  });
  const [state, setState] = useState({
    party: {
      id: 0,
      adminUserId: 0,
      status: -1,
      avatar: '',
      title: '',
      introduction: '',
      personnel: 0,
    },
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

  const leavePartyHandler = () => {
    setRequestState({
      loading: true,
      done: false,
    });
    const response1 = Axios.patch(
      `${process.env.REACT_APP_BACKEND_HOST}/parties/${state.party.id}`,
      {
        personnel: state.party.personnel - 1,
      },
    );

    const response2 = Axios.delete(
      `${process.env.REACT_APP_BACKEND_HOST}/users/${dummyMyUserId}/parties/${state.party.id}`,
    );
    Promise.all([response1, response2]).then(values => {
      setRequestState({
        loading: false,
        done: true,
      });
      console.log('팟 탈퇴 완료');
    });
  };

  if (requestState.loading) return <Spinner visible />;
  if (requestState.done) return <Redirect to="/main" />;
  if (state.party.status === -1) return <Spinner visible />;
  const dummyMyUserId = 1;
  const iamAdmin = state.party.adminUserId === dummyMyUserId;
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
          <S.PartyInformationTexts>
            <S.PartyInformationTitle>
              {state.party.title}
            </S.PartyInformationTitle>
            <S.PartyInformationIntroduction>
              {state.party.introduction}
            </S.PartyInformationIntroduction>
          </S.PartyInformationTexts>
          {!iamAdmin && (
            <S.LeaveButton>
              <Button onClick={leavePartyHandler}>나가기</Button>
            </S.LeaveButton>
          )}
        </S.PartyInformation>
        <S.ParticipantList>
          {state.userList.map(user => {
            user.isAdmin = user.id === state.party.adminUserId;
            return <ParticipantCard {...user} key={user.id} />;
          })}
        </S.ParticipantList>
      </S.PartyDetail>
    </Layout>
  );
};

export default PartyDetail;

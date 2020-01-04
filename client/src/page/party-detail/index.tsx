import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';
import Layout from '../../component/Layout';
import ParticipantCard from '../../component/ParticipantCard';

interface PartyDetailProps {
  match: any;
}

const PartyDetail: React.FC<PartyDetailProps> = ({ match }) => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}/parties/${match.params.id}/users`,
      )
      .then(function(response) {
        const data = response.data;
        setUserList(data);
      });
  }, []);
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
        </S.PartyInformation>
        <S.ParticipantList>
          {userList.map(user => (
            <ParticipantCard {...user} />
          ))}
        </S.ParticipantList>
      </S.PartyDetail>
    </Layout>
  );
};

export default PartyDetail;

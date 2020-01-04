import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';
import PartyCard from '../../component/PartyCard';

const dummyImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Opensource.svg/1200px-Opensource.svg.png';

const MyParties: React.FC = () => {
  return (
    <Layout>
      <S.MyParty>
        <S.Title>강관훈의 페이지</S.Title>
        <S.Container>
          <S.UserProfile>
            <S.ProfileImage src={dummyImage} />
          </S.UserProfile>
        </S.Container>
      </S.MyParty>
    </Layout>
  );
};

export default MyParties;

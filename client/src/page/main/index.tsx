import React, { useState } from 'react';
import * as S from './styles';
import Layout from '../../component/Layout';

import Modal from '../../component/Modal';
import PartyCard from '../../component/PartyCard';
// 테스트용 parties 객체
const parties = [
  {
    name: 'a',
    number: 1,
  },
  {
    name: 'b',
    number: 2,
  },
  {
    name: 'c',
    number: 3,
  },
  {
    name: 'd',
    number: 4,
  },
  {
    name: 'e',
    number: 5,
  },
];

const Main: React.FC = () => {
  const [state, setState] = useState({
    isModalOpened: false,
  });
  const ButtonClick = () => {
    setState({
      isModalOpened: true,
    });
  };
  const closeModal = () => {
    setState({
      isModalOpened: false,
    });
    console.log('asdf');
  };
  return (
    <Layout>
      <S.Main>
        <S.Filter>필터가 들어갈 자리</S.Filter>
        <S.GridContainer>
          <S.GridLabel>팟을 찾아보거라😊</S.GridLabel>
          {parties.length > 0 &&
            parties.map(party => (
              <S.GridItem>
                <PartyCard>{party.name}</PartyCard>
              </S.GridItem>
            ))}
        </S.GridContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;

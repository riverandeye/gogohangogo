import React from 'react';
import * as S from './styles';
import Layout from '../../component/Layout';
import PartyCard from '../../component/PartyCard';
const Main: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Filter>필터가 들어갈 자리</S.Filter>
        <S.GridContainer>
          <S.GridLabel>팟을 찾아보거라😊</S.GridLabel>
          <S.GridItem>
            <PartyCard>1</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>2</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>3</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>1</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>2</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>3</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>1</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>2</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>3</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>1</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>2</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>3</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>1</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>2</PartyCard>
          </S.GridItem>
          <S.GridItem>
            <PartyCard>3</PartyCard>
          </S.GridItem>
        </S.GridContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;

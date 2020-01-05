import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';
import { useMyPartyUser, useMyParties } from './hooks';
import getDateDiffText from '../../utils/timeParser';
import { PARTY_STATUS_MESSAGE } from '../../constants';
import { Link } from 'react-router-dom';
import COLORS from '../../styleConstants';

const MyParties: React.FC = props => {
  // TODO : user ID를 현재 접속한 사용자의 ID를 전달해야한다.
  const { userData } = useMyPartyUser(1);
  const { usersParty, notUsersParty } = useMyParties(1);

  const handlePartyClick = e => {};

  return (
    <Layout>
      <S.MyParty>
        <S.Container>
          <S.UserProfile>
            <S.ProfileImage src={userData.avatar} />
            <S.ProfileUsername>{userData.name}</S.ProfileUsername>
            <S.ProfileIntroduction>
              {userData.introduction}
            </S.ProfileIntroduction>
            <S.ProfilePriority>점수 : {userData.priority}점</S.ProfilePriority>
            <S.ProfileEmail>Email : {userData.email}</S.ProfileEmail>
          </S.UserProfile>
          <S.PartyContainer>
            {usersParty.length && (
              <S.PartyListTitle>
                <span style={{ color: COLORS.primary }}>| </span>내가 만든 파티
              </S.PartyListTitle>
            )}
            <S.PartyList>
              {usersParty.map((party, idx) => {
                const cumulatedTime = getDateDiffText(
                  new Date(party.createdAt),
                  new Date(),
                );

                return (
                  <S.PartyWrapper onClick={handlePartyClick} key={idx}>
                    <Link to="/">
                      <S.PartyHover className="cardHover">
                        <span>자세히 보기</span>
                      </S.PartyHover>
                    </Link>
                    <S.Party>
                      <S.PartyImage src={party.ottImage} />
                      <S.PartyMeta>
                        <S.PartyTitle>{party.title}</S.PartyTitle>
                        <S.PartyDetail>
                          <div className="count">
                            인원: {party.personnel} / {party.capacity}
                          </div>
                          <div className="email">계정: {party.account}</div>
                          <div className="createdAt">
                            팟 개설 시점: {cumulatedTime}
                          </div>
                          <div className="emailVerified">
                            파티 상태:
                            {PARTY_STATUS_MESSAGE[Number(party.status)]}
                          </div>
                        </S.PartyDetail>
                      </S.PartyMeta>
                    </S.Party>
                  </S.PartyWrapper>
                );
              })}
            </S.PartyList>
            <div style={{ height: '5rem' }}></div>>
            {notUsersParty.length && (
              <S.PartyListTitle>
                <span style={{ color: COLORS.primary }}>| </span>내가 참여한
                파티
              </S.PartyListTitle>
            )}
            <S.PartyList>
              {notUsersParty.map((party, idx) => {
                if (party.status === 0) return;

                const cumulatedTime = getDateDiffText(
                  new Date(party.createdAt),
                  new Date(),
                );

                return (
                  <S.PartyWrapper onClick={handlePartyClick} key={idx}>
                    <S.PartyHover className="cardHover">
                      <span>자세히 보기</span>
                    </S.PartyHover>
                    <S.Party>
                      <S.PartyImage src={party.ottImage} />
                      <S.PartyMeta>
                        <S.PartyTitle>{party.title}</S.PartyTitle>
                        <S.PartyDetail>
                          <div className="count">
                            인원: {party.personnel} / {party.capacity}
                          </div>
                          <div className="email">계정: {party.account}</div>
                          <div className="createdAt">
                            팟 개설 시점: {cumulatedTime}
                          </div>
                          <div className="emailVerified">
                            파티 상태:
                            {PARTY_STATUS_MESSAGE[Number(party.status)]}
                          </div>
                        </S.PartyDetail>
                      </S.PartyMeta>
                    </S.Party>
                  </S.PartyWrapper>
                );
              })}
            </S.PartyList>
          </S.PartyContainer>
        </S.Container>
      </S.MyParty>
    </Layout>
  );
};

export default MyParties;

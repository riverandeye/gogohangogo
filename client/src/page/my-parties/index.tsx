import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';

const dummyImage = `data:image/jpeg;base64,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`;
const dummyUserImage = `https://media.istockphoto.com/photos/beautiful-girl-smiling-with-eyes-closed-_-square-picture-id184322595`;

const MyParties: React.FC = () => {
  return (
    <Layout>
      <S.MyParty>
        <S.Container>
          <S.UserProfile>
            <S.ProfileImage src={dummyImage} />
            <S.ProfileUsername>강관훈</S.ProfileUsername>
            <S.ProfileIntroduction>
              넷플릭스를 좋아하는 학생입니다. 잘 부탁드립니다.
            </S.ProfileIntroduction>
            <S.ProfilePriority>점수 : 100점</S.ProfilePriority>
            <S.ProfileEmail>Email : riverandeye@gmail.com</S.ProfileEmail>
          </S.UserProfile>
          <S.PartyContainer>
            <S.PartyListTitle>내가 만든 파티</S.PartyListTitle>
            <S.PartyList>
              <S.Party>
                <S.PartyImage src="https://images-na.ssl-images-amazon.com/images/I/41Ix1vMUK7L.png" />
                <S.PartyMeta>
                  <S.PartyTitle>
                    저와 함께 넷플릭스 계정 공유하실 분을
                    찾습니다다다다다다다다다다다다다!
                  </S.PartyTitle>
                  <S.PartyDetail>
                    <div className="count">인원: 1 / 4</div>
                    <div className="email">계정: riveandeye@hello.com</div>
                    <div className="createdAt">
                      파티 생성일: 2019년 4월 14일
                    </div>
                    <div className="emailVerified">계정 인증: 완료</div>
                  </S.PartyDetail>
                </S.PartyMeta>
                <S.PartyUserList>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                </S.PartyUserList>
              </S.Party>
            </S.PartyList>
            <S.PartyListTitle>내가 참여한 파티</S.PartyListTitle>
            <S.PartyList>
              <S.Party>
                <S.PartyImage src="https://images-na.ssl-images-amazon.com/images/I/41Ix1vMUK7L.png" />
                <S.PartyMeta>
                  <S.PartyTitle>
                    저와 함께 넷플릭스 계정 공유하실 분을
                    찾습니다다다다다다다다다다다다다!
                  </S.PartyTitle>
                  <S.PartyDetail>
                    <div className="count">인원: 1 / 4</div>
                    <div className="email">계정: riveandeye@hello.com</div>
                    <div className="createdAt">
                      파티 생성일: 2019년 4월 14일
                    </div>
                    <div className="emailVerified">계정 인증: 완료</div>
                  </S.PartyDetail>
                </S.PartyMeta>
                <S.PartyUserList>
                  <S.PartyUser>
                    <S.PartyUserImage src={dummyUserImage} />
                  </S.PartyUser>
                  <S.PartyUser>
                    <S.PartyUserImage src={dummyUserImage} />
                  </S.PartyUser>
                  <S.PartyUser>
                    <S.PartyUserImage src={dummyUserImage} />
                  </S.PartyUser>
                  <S.PartyUser>
                    <S.PartyUserImage src={dummyUserImage} />
                  </S.PartyUser>
                </S.PartyUserList>
              </S.Party>
              <S.Party>
                <S.PartyImage src="https://images-na.ssl-images-amazon.com/images/I/41Ix1vMUK7L.png" />
                <S.PartyMeta>
                  <S.PartyTitle>
                    저와 함께 넷플릭스 계정 공유하실 분을
                    찾습니다다다다다다다다다다다다다!
                  </S.PartyTitle>
                  <S.PartyDetail>
                    <div className="count">인원: 1 / 4</div>
                    <div className="email">계정: riveandeye@hello.com</div>
                    <div className="createdAt">
                      파티 생성일: 2019년 4월 14일
                    </div>
                    <div className="emailVerified">계정 인증: 완료</div>
                  </S.PartyDetail>
                </S.PartyMeta>
                <S.PartyUserList>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                </S.PartyUserList>
              </S.Party>
              <S.Party>
                <S.PartyImage src="https://images-na.ssl-images-amazon.com/images/I/41Ix1vMUK7L.png" />
                <S.PartyMeta>
                  <S.PartyTitle>
                    저와 함께 넷플릭스 계정 공유하실 분을
                    찾습니다다다다다다다다다다다다다!
                  </S.PartyTitle>
                  <S.PartyDetail>
                    <div className="count">인원: 1 / 4</div>
                    <div className="email">계정: riveandeye@hello.com</div>
                    <div className="createdAt">
                      파티 생성일: 2019년 4월 14일
                    </div>
                    <div className="emailVerified">계정 인증: 완료</div>
                  </S.PartyDetail>
                </S.PartyMeta>
                <S.PartyUserList>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                </S.PartyUserList>
              </S.Party>
              <S.Party>
                <S.PartyImage src="https://images-na.ssl-images-amazon.com/images/I/41Ix1vMUK7L.png" />
                <S.PartyMeta>
                  <S.PartyTitle>
                    저와 함께 넷플릭스 계정 공유하실 분을
                    찾습니다다다다다다다다다다다다다!
                  </S.PartyTitle>
                  <S.PartyDetail>
                    <div className="count">인원: 1 / 4</div>
                    <div className="email">계정: riveandeye@hello.com</div>
                    <div className="createdAt">
                      파티 생성일: 2019년 4월 14일
                    </div>
                    <div className="emailVerified">계정 인증: 완료</div>
                  </S.PartyDetail>
                </S.PartyMeta>
                <S.PartyUserList>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                  <S.PartyUser>안녕</S.PartyUser>
                </S.PartyUserList>
              </S.Party>
            </S.PartyList>
          </S.PartyContainer>
        </S.Container>
      </S.MyParty>
    </Layout>
  );
};

export default MyParties;

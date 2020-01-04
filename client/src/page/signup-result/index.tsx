import React from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';
import AppBar from '../../component/AppBar';
import COLORS from '../../styleConstants';

import logo from '../../assets/logo/npang.png';

const SignUpResult: React.FC = () => {
  return (
    <>
      <AppBar />
      <S.main>
        <S.Flex>
          <S.Content>
            <MDBAnimation type="tada" duration={10} infinite>
              <img src={logo} width="250px" />
            </MDBAnimation>
            <h1
              style={{
                fontSize: '3.0rem',
                fontWeight: 'bold',
                marginTop: '4.5rem',
              }}
            >
              <span style={{ color: COLORS.primary }}>회원가입</span>이{' '}
              <span style={{ color: COLORS.primary }}>완료</span>되었습니다
            </h1>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              이제 이메일을 인증하고 서비스를 이용해보세요!
            </h1>
          </S.Content>
        </S.Flex>
        <div
          style={{
            marginTop: '3rem',
          }}
        >
          <a
            href="/main"
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '2.0rem',
              fontWeight: 'bold',
              background: COLORS.primary,
              padding: '1rem',
              borderRadius: '1rem',
            }}
          >
            홈으로 가기
          </a>
        </div>
      </S.main>
    </>
  );
};

export default SignUpResult;

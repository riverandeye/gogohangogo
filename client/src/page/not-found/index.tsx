import React from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';
import AppBar from '../../component/AppBar';
import COLORS from '../../styleConstants';

import logo from '../../assets/logo/npang_sad.png';

const NotFound: React.FC = () => {
  return (
    <>
      <AppBar />
      <S.main>
        <S.Flex>
          <S.Content>
            <MDBAnimation type="rubberBand" duration={10} infinite>
              <img src={logo} width="250px" />
            </MDBAnimation>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginTop: '4.5rem',
              }}
            >
              찾는 페이지가
            </h1>
            <h1
              style={{
                fontSize: '3.0rem',
                fontWeight: 'bold',
                color: COLORS.primary,
              }}
            >
              <MDBAnimation
                type="fadeIn"
                delay="0.5s"
                style={{ display: 'inline' }}
              >
                <span>없</span>
              </MDBAnimation>
              <MDBAnimation
                type="fadeIn"
                delay="1s"
                style={{ display: 'inline' }}
              >
                <span>어</span>
              </MDBAnimation>
              <MDBAnimation
                type="fadeIn"
                delay="1.5s"
                style={{ display: 'inline' }}
              >
                <span>요</span>
              </MDBAnimation>
              <MDBAnimation
                type="fadeIn"
                delay="2.0s"
                style={{ display: 'inline' }}
              >
                <span>ㅠㅠ</span>
              </MDBAnimation>
            </h1>
          </S.Content>
        </S.Flex>
      </S.main>
    </>
  );
};

export default NotFound;

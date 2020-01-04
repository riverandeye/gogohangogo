import React from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';
import AppBar from '../../component/AppBar';
import COLORS from '../../styleConstants';

import logo2 from '../../assets/logo/npang_sad.jpg';

const NotFound: React.FC = () => {
  return (
    <>
      <AppBar />
      <S.main>
        <S.Flex>
          <S.Content>
            <MDBAnimation type="rubberBand" duration={10} infinite>
              <img src={logo2} width="250px" />
            </MDBAnimation>
            <h1
              style={{
                fontSize: '5.0rem',
                fontWeight: 'bold',
                color: COLORS.primary,
                marginTop: '4.5rem',
              }}
            >
              찾는 페이지가
            </h1>
            <h1
              style={{
                fontSize: '7.0rem',
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
            </h1>
          </S.Content>
        </S.Flex>
      </S.main>
    </>
  );
};

export default NotFound;

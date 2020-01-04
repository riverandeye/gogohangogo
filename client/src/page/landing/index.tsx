import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';
import COLORS from '../../styleConstants';
import Grid from '@material-ui/core/Grid';

import carousel1 from '../../assets/img/carousel1.jpg';
import carousel2 from '../../assets/img/carousel2.jpg';
import carousel3 from '../../assets/img/carousel3.jpg';

import member1 from '../../assets/img/member1.jpg';
import member2 from '../../assets/img/member2.jpg';
import member3 from '../../assets/img/member3.jpg';
import member4 from '../../assets/img/member4.jpg';
import member5 from '../../assets/img/member5.jpg';

import github from '../../assets/img/github.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';

const Landing: React.FC = () => {
  return (
    <Layout>
      <S.main>
        <Carousel style={{ width: '100%' }}>
          <Carousel.Item>
            <img src={carousel1} alt="First slide" width="100%" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel2} alt="Second slide" width="100%" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel3} alt="Third slide" width="100%" />
          </Carousel.Item>
        </Carousel>
        <S.Section1 id="section1">
          <ScrollAnimation animateIn="fadeIn">
            <h1
              style={{
                fontSize: '3.0rem',
                fontWeight: 'bold',
                margin: '10rem 15rem',
                marginTop: '20rem',
              }}
            >
              서비스 소개 <span style={{ color: COLORS.primary }}>|</span>
            </h1>
          </ScrollAnimation>
          <S.Flex>
            <ScrollAnimation animateIn="fadeIn">
              <p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  margin: '0rem auto',
                }}
              >
                Netflix, Watcha, Wave⋯
                <br />
                같이 볼 사람이 필요한가요?
                <br />
                조금 더 쉽고 간편하게
                <br />
                NBread에서 구해보세요!
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInUp"
              style={{
                margin: '0rem auto',
              }}
            >
              <img src="https://us.123rf.com/450wm/terrry4/terrry41904/terrry4190402765/124945839-browser-window-web-browser-in-flat-style-window-concept-internet-browser-mockup-screen-design-vector.jpg?ver=6" />
            </ScrollAnimation>
          </S.Flex>
          <S.Flex>
            <ScrollAnimation
              animateIn="fadeIn"
              style={{
                margin: '0rem auto',
              }}
            >
              <p
                style={{
                  fontSize: '2.0rem',
                  textAlign: 'center',
                  margin: '0rem auto',
                }}
              >
                NBread는 어쩌구 웅앵...
                <br />
                이러저러해서 좋구요
                <br />
                대충 필요성에 의해서.. 만들엇구요..
                <br />
                암튼 조아요 써보셔요
              </p>
            </ScrollAnimation>
          </S.Flex>
        </S.Section1>
        <S.Section2 id="section2">
          <ScrollAnimation animateIn="fadeIn">
            <h1
              style={{
                fontSize: '3.0rem',
                fontWeight: 'bold',
                margin: '10rem 15rem',
              }}
            >
              만든 사람들 <span style={{ color: COLORS.primary }}>|</span>
            </h1>
          </ScrollAnimation>
          <S.Flex>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <img src={member1} />
                  </Grid>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <h1>성이름</h1>
                    <h2>역할</h2>
                    <p>웅앵웅ㅇ햐ㅕㅂ ㄷ개ㅑㅎㄷ쟈ㅕㅈㄷㅎㅎㅈ댣걓ㄷ쟣ㅗ</p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <img src={member2} />
                  </Grid>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <h1>성이름</h1>
                    <h2>역할</h2>
                    <p>웅앵웅ㅇ햐ㅕㅂ ㄷ개ㅑㅎㄷ쟈ㅕㅈㄷㅎㅎㅈ댣걓ㄷ쟣ㅗ</p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <img src={member3} />
                  </Grid>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <h1>성이름</h1>
                    <h2>역할</h2>
                    <p>웅앵웅ㅇ햐ㅕㅂ ㄷ개ㅑㅎㄷ쟈ㅕㅈㄷㅎㅎㅈ댣걓ㄷ쟣ㅗ</p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <img src={member4} />
                  </Grid>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <h1>성이름</h1>
                    <h2>역할</h2>
                    <p>웅앵웅ㅇ햐ㅕㅂ ㄷ개ㅑㅎㄷ쟈ㅕㅈㄷㅎㅎㅈ댣걓ㄷ쟣ㅗ</p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <img src={member5} />
                  </Grid>
                  <Grid item xs style={{ margin: '2rem' }}>
                    <h1>성이름</h1>
                    <h2>역할</h2>
                    <p>웅앵웅ㅇ햐ㅕㅂ ㄷ개ㅑㅎㄷ쟈ㅕㅈㄷㅎㅎㅈ댣걓ㄷ쟣ㅗ</p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
          </S.Flex>
        </S.Section2>
        <S.Footer>
          <S.FooterItem>
            <a href="https://facebook.com">
              <img src={facebook} width={'32px'} />
            </a>
          </S.FooterItem>
          <S.FooterItem>
            <a href="https://instagram.com">
              <img src={instagram} width={'32px'} />
            </a>
          </S.FooterItem>
          <S.FooterItem>
            <a href="https://github.com">
              <img src={github} width={'32px'} />
            </a>
          </S.FooterItem>
        </S.Footer>
      </S.main>
    </Layout>
  );
};

export default Landing;

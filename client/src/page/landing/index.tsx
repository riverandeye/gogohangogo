import React from 'react';

import * as S from './styles';
import LandingBar from '../../component/LandingBar';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';
import COLORS from '../../styleConstants';
import Grid from '@material-ui/core/Grid';

import carousel1 from '../../assets/img/carousel1.jpg';
import carousel2 from '../../assets/img/carousel2.jpg';
import carousel3 from '../../assets/img/carousel3.jpg';

import member1 from '../../assets/img/member1.png';
import member2 from '../../assets/img/member2.jpg';
import member3 from '../../assets/img/member3.jpg';
import member4 from '../../assets/img/member4.jpg';
import member5 from '../../assets/img/member5.jpg';

import github from '../../assets/img/github.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';

import logo from '../../assets/logo/npang.png';
import capture from '../../assets/img/capture.png';
import LoginForm from '../../component/LoginForm/index';
import { useCookieUser } from '../../utils/use-cookie-user';

const Landing: React.FC = () => {
  const user = useCookieUser();

  return (
    <>
      <LandingBar />
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
        <S.LoginForm>
          <LoginForm />
        </S.LoginForm>
        <S.Section1 id="section1">
          <ScrollAnimation animateIn="fadeIn">
            <h1
              style={{
                fontSize: '3.0rem',
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
                Netflix, Watcha, Wavve⋯
                <br />
                같이 볼 사람이 필요한가요?
              </p>
              <p
                style={{
                  fontSize: '2.5rem',
                  margin: '0rem auto',
                }}
              >
                조금 더 쉽고 간편하게
                <br />
                <span>
                  <img src={logo} width="32px" style={{ margin: '0.5rem' }} />
                </span>
                nBread에서 모아보세요!
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInUp"
              style={{
                margin: '0rem auto',
                boxShadow:
                  '0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              }}
            >
              <img src={capture} />
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
                <span>
                  <img src={logo} width="24px" style={{ margin: '0.5rem' }} />
                </span>
                nBread는 OTT서비스를 이용하는 학생들이 좀 더 쉽게 N인팟을 구인할
                수 있는 서비스입니다.
                <br />
                다른 서비스에는 없는 '신뢰도' 시스템을 통해 파티를 모집하는
                사람도, 참여하는 사람도 믿을만한 거래를 할 수 있습니다.
              </p>
              <br />
              <br />
              <p
                style={{
                  fontSize: '2.0rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  margin: '0rem auto',
                }}
              >
                구인부터 참여까지, 간편하고 확실하게!
              </p>
            </ScrollAnimation>
          </S.Flex>
        </S.Section1>
        <S.Section2 id="section2">
          <ScrollAnimation animateIn="fadeIn">
            <h1
              style={{
                fontSize: '3.0rem',
                margin: '10rem 15rem',
              }}
            >
              <span>
                <img src={logo} width="32px" style={{ margin: '0.5rem' }} />
              </span>
              nBread를 만든 사람들{' '}
              <span style={{ color: COLORS.primary }}>|</span>
            </h1>
          </ScrollAnimation>
          <S.Flex>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginRight: '-8rem',
                    }}
                  >
                    <img src={member1} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginLeft: '0rem',
                    }}
                  >
                    <h1>
                      남정호
                      <span style={{ fontSize: '1.5rem' }}> Jeongho Nam</span>
                    </h1>
                    <h3>
                      <span style={{ color: COLORS.primary }}>|</span> Party API
                      <br />
                      <span style={{ color: COLORS.primary }}>|</span> Party
                      detail view
                    </h3>
                    <p style={{ fontSize: '1.4rem' }}>
                      - 1994.11.30
                      <br />
                      - 고려대학교 재학 (2013~)
                      <br />
                    </p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginRight: '-8rem',
                    }}
                  >
                    <img src={member2} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginLeft: '0rem',
                    }}
                  >
                    <h1>
                      이해나
                      <span style={{ fontSize: '1.5rem' }}> Haena Lee</span>
                    </h1>
                    <h3>
                      <span style={{ color: COLORS.primary }}>|</span> Main view
                      <br />
                      <span style={{ color: COLORS.primary }}>|</span> Party
                      view
                    </h3>
                    <p style={{ fontSize: '1.4rem' }}>
                      - 1995.12.08
                      <br />
                      - 고려대학교 재학 (2015~)
                      <br />
                    </p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginRight: '-8rem',
                    }}
                  >
                    <img src={member3} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginLeft: '0rem',
                    }}
                  >
                    <h1>
                      강민주
                      <span style={{ fontSize: '1.5rem' }}> Minju Kang</span>
                    </h1>
                    <h3>
                      <span style={{ color: COLORS.primary }}>|</span> User API
                      <br />
                      <span style={{ color: COLORS.primary }}>|</span> Login,
                      Signup view
                    </h3>
                    <p style={{ fontSize: '1.4rem' }}>
                      - 1997.03.12
                      <br />
                      - 한양대학교 재학 (2016~)
                      <br />
                    </p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginRight: '-8rem',
                    }}
                  >
                    <img src={member4} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginLeft: '0rem',
                    }}
                  >
                    <h1>
                      강관훈
                      <span style={{ fontSize: '1.5rem' }}> Kwanhun Kang</span>
                    </h1>
                    <h3>
                      <span style={{ color: COLORS.primary }}>|</span> Party API
                      <br />
                      <span style={{ color: COLORS.primary }}>|</span> Party
                      detail view
                    </h3>
                    <p style={{ fontSize: '1.4rem' }}>
                      - 1995.04.13
                      <br />
                      - 고려대학교 재학 (2014~)
                      <br />
                    </p>
                  </Grid>
                </Grid>
              </S.Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft">
              <S.Card>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginRight: '-8rem',
                    }}
                  >
                    <img src={member5} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      margin: '2rem',
                      marginLeft: '0rem',
                    }}
                  >
                    <h1>
                      김현채
                      <span style={{ fontSize: '1.5rem' }}> Hyeonchae Kim</span>
                    </h1>
                    <h3>
                      <span style={{ color: COLORS.primary }}>|</span> Landing
                      view
                      <br />
                      <span style={{ color: COLORS.primary }}>|</span> ETC.
                      Front view
                    </h3>
                    <p style={{ fontSize: '1.4rem' }}>
                      - 2000.08.21
                      <br />- 고려대학교 재학 (2019~)
                    </p>
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
            <a href="https://github.com/riverandeye/gogohangogo">
              <img src={github} width={'32px'} />
            </a>
          </S.FooterItem>
        </S.Footer>
      </S.main>
    </>
  );
};

export default Landing;

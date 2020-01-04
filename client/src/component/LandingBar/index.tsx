import React, { useState, useEffect } from 'react';
import * as S from './styles';
import logo from '../../assets/logo/npang_simple.png';

const useScroll = () => {
  const [state, setState] = useState({
    y: 100,
  });
  const onScroll = () => {
    setState({ y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

const scrollToS1 = () => {
  window.scrollTo({
    top: document.getElementById('section1').offsetTop - 150,
    behavior: 'smooth',
  });
};

const scrollToS2 = () => {
  window.scrollTo({
    top: document.getElementById('section2').offsetTop - 150,
    behavior: 'smooth',
  });
};

const LandingBar: React.FC = () => {
  useScroll();
  return (
    <S.LandingBar
      style={{
        background: 'rgba(255, 130, 98,' + (window.scrollY - 100) / 100 + ')',
        boxShadow:
          window.scrollY > 100
            ? '0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
            : 'none',
        width: '100%',
      }}
    >
      <S.Container>
        <a href="/">
          <S.Logo>
            <img src={logo} width="100%" alt="logo" />
          </S.Logo>
        </a>
        <S.AppBarMenu>
          <S.AppBarItem>
            <a
              onClick={scrollToS1}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.6rem',
                fontWeight: 'bold',
              }}
            >
              서비스 소개
            </a>
          </S.AppBarItem>
          <S.AppBarItem>
            <a
              onClick={scrollToS2}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.6rem',
                fontWeight: 'bold',
              }}
            >
              만든 사람들
            </a>
          </S.AppBarItem>
        </S.AppBarMenu>
      </S.Container>
    </S.LandingBar>
  );
};

export default LandingBar;

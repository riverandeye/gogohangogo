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
        background: 'rgba(255, 130, 98,' + (window.scrollY - 100) / 200 + ')',
        boxShadow:
          window.scrollY > 150
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
        <S.AppBarMenu
          style={{
            marginTop: '1rem',
          }}
        >
          <S.AppBarItem>
            <a
              onClick={scrollToS1}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.8rem',
                cursor: 'pointer',
              }}
            >
              서비스 소개
            </a>
          </S.AppBarItem>
          <S.AppBarItem>
            <h1
              style={{
                color: 'white',
                fontSize: '1.8rem',
                marginTop: '0.3rem',
              }}
            >
              |
            </h1>
          </S.AppBarItem>
          <S.AppBarItem>
            <a
              onClick={scrollToS2}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.8rem',
                cursor: 'pointer',
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

import React, { useState, useEffect } from 'react';
import * as S from './styles';
import logo from '../../assets/logo/npang_simple.png';
import Button from '../Button';

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
              href=""
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '1.4rem',
                fontWeight: 'bold',
              }}
            >
              서비스 소개
            </a>
          </S.AppBarItem>
          <S.AppBarItem>
            <a
              href=""
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '1.4rem',
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

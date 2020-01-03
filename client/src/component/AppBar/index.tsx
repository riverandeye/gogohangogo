import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo/npang_simple.png';
import Button from '../Button';
const AppBar: React.FC = () => {
  return (
    <S.AppBar>
      <S.Container>
        <a href="/">
          <S.Logo>
            <img src={logo} width="100%" alt="logo" />
          </S.Logo>
        </a>
        <S.AppBarMenu>
          <S.AppBarItem>
            <Button colortype="primary" hasborder="true">
              <a href="/users/sign_in">내 팟 관리</a>
            </Button>
          </S.AppBarItem>
          <S.AppBarItem>
            <Button colortype="primary" hasborder="true">
              <a href="/users/sign_in">내 계정 관리</a>
            </Button>
          </S.AppBarItem>
        </S.AppBarMenu>
      </S.Container>
    </S.AppBar>
  );
};

export default AppBar;

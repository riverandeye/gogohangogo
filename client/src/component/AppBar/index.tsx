import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo/npang_simple.png';
const AppBar: React.FC = () => {
  return (
    <S.AppBar>
      <S.Container>
        <a href="/main">
          <S.Logo>
            <img src={logo} width="100%" alt="logo" />
          </S.Logo>
        </a>
        <S.AppBarMenu>
          <S.AppBarItem>
            <S.AppBarButton colortype="primary" hasborder="true">
              <a href="/parties/1">내 팟 관리</a>
            </S.AppBarButton>
          </S.AppBarItem>
          <S.AppBarItem>
            <S.AppBarButton colortype="primary" hasborder="true">
              <a href="/myparties">내 계정 관리</a>
            </S.AppBarButton>
          </S.AppBarItem>
        </S.AppBarMenu>
      </S.Container>
    </S.AppBar>
  );
};

export default AppBar;

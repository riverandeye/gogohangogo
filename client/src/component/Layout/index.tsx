import React from 'react';
import * as S from './styles';
import AppBar from '../AppBar';
import Content from '../Content';
import SpeedDial from '../SpeedDial';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <AppBar />
      <Content>{children}</Content>
      <SpeedDial />
    </S.Layout>
  );
};

export default Layout;

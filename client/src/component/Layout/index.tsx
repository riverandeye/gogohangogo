import React from 'react';
import * as S from './styles';
import AppBar from '../AppBar';
import Content from '../Content';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <AppBar />
      <Content>{children}</Content>
    </S.Layout>
  );
};

export default Layout;

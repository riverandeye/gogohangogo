import React from 'react';
import * as S from './styles';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <S.Card></S.Card>;
};

export default Content;

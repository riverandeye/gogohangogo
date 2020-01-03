import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  colortype?: string;
  hasborder?: string;
}

const Button: React.FC<ButtonProps> = ({ children, colortype, hasborder }) => {
  return (
    <S.Button colortype={colortype} hasborder={hasborder}>
      {children}
    </S.Button>
  );
};

export default Button;

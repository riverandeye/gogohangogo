import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  colorType?: string;
  hasBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, colorType, hasBorder }) => {
  return (
    <S.Button colorType={colorType} hasBorder={hasBorder}>
      {children}
    </S.Button>
  );
};

export default Button;

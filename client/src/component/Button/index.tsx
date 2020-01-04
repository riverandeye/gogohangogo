import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  colortype?: string;
  hasborder?: string;
  onClick?;
}

const Button: React.FC<ButtonProps> = ({
  children,
  colortype,
  hasborder,
  onClick,
}) => {
  return (
    <S.Button onClick={onClick} colortype={colortype} hasborder={hasborder}>
      {children}
    </S.Button>
  );
};

export default Button;

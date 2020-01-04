import React from 'react';

import * as S from './styles';

interface DepositStatusProps {
  isAdmin: boolean;
  isDeposited: boolean;
}

const DepositStatus: React.FC<DepositStatusProps> = ({
  isAdmin,
  isDeposited,
}) => {
  let text = '';
  let color = 'green';
  if (isAdmin) {
    text = '파티장';
  } else if (isDeposited) {
    text = '입금을 완료하였습니다.';
  } else {
    text = '입금이 필요합니다.';
    color = 'red';
  }
  return <S.Status color={color}>{text}</S.Status>;
};

export default DepositStatus;

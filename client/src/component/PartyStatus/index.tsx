import React from 'react';

import * as S from './styles';
import { PARTY_STATUS_MESSAGE } from '../../constants';

interface PartyStatusProps {
  status: number;
}

const PartyStatus: React.FC<PartyStatusProps> = ({ status }) => {
  const text = PARTY_STATUS_MESSAGE[status];
  return <S.Status>{text}</S.Status>;
};

export default PartyStatus;

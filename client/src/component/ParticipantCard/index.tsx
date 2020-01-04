import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';

import DepositStatus from '../DepositStatus';
import * as S from './styles';

interface ParticipantCardProps {
  isAdmin: boolean;
  avatar: string;
  email: string;
  introduction: string;
  name: string;
  isDeposited: boolean;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  isAdmin,
  avatar,
  email,
  introduction,
  name,
  isDeposited,
}) => {
  const depositProps = {
    isAdmin,
    isDeposited,
  };
  return (
    <S.Card>
      <S.CardHeader
        avatar={<img src={avatar} alt="ott" width="40rem" height="40rem" />}
        title={<S.CardHeaderTitle>{name}</S.CardHeaderTitle>}
        subheader={
          <S.CardSubHeader>
            <S.Email>{email}</S.Email>
            <DepositStatus {...depositProps} />
          </S.CardSubHeader>
        }
      />
      <S.CardContent>
        <p>{introduction}</p>
      </S.CardContent>
    </S.Card>
  );
};

export default ParticipantCard;

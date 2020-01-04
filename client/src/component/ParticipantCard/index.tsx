import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';

import * as S from './styles';

interface ParticipantCardProps {
  avatar: string;
  email: string;
  introduction: string;
  name: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  avatar,
  email,
  introduction,
  name,
}) => {
  return (
    <S.Card>
      <S.CardHeader
        avatar={<img src={avatar} alt="ott" width="40rem" height="40rem" />}
        title={<div>{name}</div>}
        subheader={<div>{email}</div>}
      />
      <S.CardContent>
        <p>{introduction}</p>
      </S.CardContent>
    </S.Card>
  );
};

export default ParticipantCard;

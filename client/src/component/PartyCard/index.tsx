import React from 'react';
import * as S from './styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import ott from '../../assets/OTT_icons/netflix.png';

interface ContentProps {
  children: React.ReactNode;
}

const PartyCard: React.FC<ContentProps> = ({ children }) => {
  return (
    <S.Card>
      <S.CardHover></S.CardHover>
      <CardActionArea>
        <S.CardHeader
          // avatar={<S.Avatar aria-label="recipe">A</S.Avatar>}
          avatar={<img src={ott} alt="ott" width="35px" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<S.CardHeaderTitle>넷플릭스 4인팟</S.CardHeaderTitle>}
          subheader={<S.CardSubHeader>돈잘낼 사람 구함</S.CardSubHeader>}
        />
        <CardContent>
          <p>{children}</p>
        </CardContent>
      </CardActionArea>
    </S.Card>
  );
};

export default PartyCard;

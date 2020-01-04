import React from 'react';
import * as S from './styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface ContentProps {
  children: React.ReactNode;
}

const PartyCard: React.FC<ContentProps> = ({ children }) => {
  return (
    <S.Card>
      <CardHeader
        avatar={<S.Avatar aria-label="recipe">A</S.Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="TITLE"
        subheader="SUBHEADER"
      />
      <CardMedia image="../../assets/logo/npang_open.png" title="Paella dish" />
      <CardContent>
        <p>{children}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </S.Card>
  );
};

export default PartyCard;

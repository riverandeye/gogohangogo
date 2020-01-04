import React from 'react';
import * as S from './styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FaceIcon from '@material-ui/icons/Face';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import COLORS from '../../styleConstants';
import { AdminUser } from './interface';
import getDateDiffText from '../../utils/timeParser';
import getOttImgUrl from '../../utils/ottImgMatcher';

interface PartyCardProps {
  title: string;
  introduction: string;
  adminUser: AdminUser;
  createdAt: string;
  personnel: number;
  ottName: string;
  setClickedCard;
  partyCardId;
}

const PartyCard: React.FC<PartyCardProps> = ({
  title,
  introduction,
  adminUser,
  createdAt,
  personnel,
  ottName,
  setClickedCard,
  partyCardId,
}) => {
  // for timeParser util
  const fromDate = new Date(createdAt);
  const toDate = new Date();
  const cumulatedTime = getDateDiffText(fromDate, toDate);
  // for ottBrandImgMatcher util
  const ottImg = getOttImgUrl(ottName);
  const cardClickHandler = () => {
    setClickedCard(partyCardId);
  };
  return (
    <S.Card>
      <S.CardHover className="cardHover" onClick={cardClickHandler}>
        <span className="testText">자세히 보기</span>
      </S.CardHover>
      {/* <CardActionArea> */}
      <S.CardHeader
        avatar={<img src={ottImg} alt="ottBrandImg" width="35px" />}
        title={<S.CardHeaderTitle>{title}</S.CardHeaderTitle>}
        subheader={<S.CardSubHeader>{introduction}</S.CardSubHeader>}
      />
      <S.CardContent>
        <S.PartyInfo>
          <FaceIcon style={{ color: COLORS.primaryLight }} /> 팟장:{' '}
          <b>{adminUser.name}</b>
        </S.PartyInfo>
        <S.PartyInfo>
          <AccessAlarmIcon style={{ color: COLORS.primaryLight }} /> 팟 개설
          시점: <b>{cumulatedTime}</b>
        </S.PartyInfo>
        <S.PartyInfo>
          <PersonAddIcon style={{ color: COLORS.primaryLight }} /> 가입한 인원
          수: <b>{personnel}명</b>
        </S.PartyInfo>
        {/* <p>{children}</p> */}
      </S.CardContent>
      {/* </CardActionArea> */}
    </S.Card>
  );
};

export default PartyCard;

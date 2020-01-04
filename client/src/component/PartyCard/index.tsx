import React from 'react';
import * as S from './styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FaceIcon from '@material-ui/icons/Face';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// import netflixImg from '../../assets/OTT_icons/netflix.png';
// import primeImg from '../../assets/OTT_icons/prime.png';
// import watchaImg from '../../assets/OTT_icons/watcha.png';
// import wavveImg from '../../assets/OTT_icons/wavve.png';

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
}

const sayHi = () => {
  alert('he');
};
const PartyCard: React.FC<PartyCardProps> = ({
  title,
  introduction,
  adminUser,
  createdAt,
  personnel,
  ottName,
}) => {
  // for timeParser util
  const fromDate = new Date(createdAt);
  const toDate = new Date();
  const cumulatedTime = getDateDiffText(fromDate, toDate);
  // for ottBrandImgMatcher util
  const ottImg = getOttImgUrl(ottName);
  return (
    <S.Card>
      <S.test className="test" onClick={sayHi}>
        <span className="testText">자세히 보기</span>
      </S.test>
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
          <PersonAddIcon style={{ color: COLORS.primaryLight }} /> 남은 인원 수:{' '}
          <b>{personnel}명</b>
        </S.PartyInfo>
        {/* <p>{children}</p> */}
      </S.CardContent>
      {/* </CardActionArea> */}
    </S.Card>
  );
};

export default PartyCard;

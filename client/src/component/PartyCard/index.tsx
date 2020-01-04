import React from 'react';
import * as S from './styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FaceIcon from '@material-ui/icons/Face';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ott from '../../assets/OTT_icons/netflix.png';
import COLORS from '../../styleConstants';
import { AdminUser } from './interface';

interface PartyCardProps {
  title: string;
  introduction: string;
  adminUser: AdminUser;
  createdAt: string;
}

const sayHi = () => {
  alert('he');
};
const PartyCard: React.FC<PartyCardProps> = ({
  title,
  introduction,
  adminUser,
  createdAt,
}) => {
  console.log(Date.parse(createdAt));
  return (
    <S.Card>
      <S.test className="test" onClick={sayHi}>
        <span className="testText">자세히 보기</span>
      </S.test>
      {/* <CardActionArea> */}
      <S.CardHeader
        avatar={<img src={ott} alt="ott" width="35px" />}
        title={<S.CardHeaderTitle>{title}</S.CardHeaderTitle>}
        subheader={<S.CardSubHeader>{introduction}</S.CardSubHeader>}
      />
      <S.CardContent>
        <S.PartyInfo>
          <FaceIcon style={{ color: COLORS.primaryLight }} /> 팟장:
          {adminUser.name}
        </S.PartyInfo>
        <S.PartyInfo>
          <AccessAlarmIcon style={{ color: COLORS.primaryLight }} /> 팟 개설
          일자: {createdAt}
        </S.PartyInfo>
        <S.PartyInfo>
          <PersonAddIcon style={{ color: COLORS.primaryLight }} /> 남은 인원 수:
          2명
        </S.PartyInfo>
        {/* <p>{children}</p> */}
      </S.CardContent>
      {/* </CardActionArea> */}
    </S.Card>
  );
};

export default PartyCard;

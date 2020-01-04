import React from 'react';
import * as S from './styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FaceIcon from '@material-ui/icons/Face';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ott from '../../assets/OTT_icons/netflix.png';
import COLORS from '../../styleConstants';
interface ContentProps {
  children: React.ReactNode;
}

const sayHi = () => {
  alert('he');
};
const PartyCard: React.FC<ContentProps> = ({ children }) => {
  return (
    <S.Card>
      <S.test className="test" onClick={sayHi}>
        <span className="testText">자세히 보기</span>
      </S.test>
      {/* <CardActionArea> */}
      <S.CardHeader
        avatar={<img src={ott} alt="ott" width="35px" />}
        title={<S.CardHeaderTitle>넷플릭스 4인팟</S.CardHeaderTitle>}
        subheader={<S.CardSubHeader>돈잘낼 사람 구함</S.CardSubHeader>}
      />
      <S.CardContent>
        <S.PartyInfo>
          <FaceIcon style={{ color: COLORS.primaryLight }} /> 팟장: njh
        </S.PartyInfo>
        <S.PartyInfo>
          <AccessAlarmIcon style={{ color: COLORS.primaryLight }} /> 팟 개설
          일자: 3일전
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

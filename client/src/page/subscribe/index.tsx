import React from 'react';

import * as S from './styles';
import unsubscribePush from '../../utils/unsubscribe-push';
import subscribePush from '../../utils/subscribe-push';

const Subscribe = () => {
  const checkAlarm = async e => {
    console.log('checkAlarm');
    await fetch(`${process.env.REACT_APP_BACKEND_HOST}/users/1/check`, {
      method: 'GET',
    });
  };

  return (
    <S.Subscribe>
      <div>팝업 핸들러 테스트</div>
      <br />
      <S.SubmitButton onClick={subscribePush}>구독하기</S.SubmitButton>
      <br />
      <S.SubmitButton onClick={unsubscribePush}>구독취소하기</S.SubmitButton>
      <br />
      <S.SubmitButton onClick={checkAlarm}>알람테스트하기</S.SubmitButton>
    </S.Subscribe>
  );
};

export default Subscribe;

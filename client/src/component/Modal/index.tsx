import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
interface ModalProps {
  isOpened?: Boolean;
  close?: any;
  modalInfo;
  closeModalHandler;
}

const Modal: React.FC<ModalProps> = ({
  isOpened,
  close,
  modalInfo,
  closeModalHandler,
}) => {
  const {
    title,
    introduction,
    adminUserId,
    createdAt,
    personnel,
    ottName,
    setClickedCard,
    partyCardId,
  } = modalInfo;

  const maxSlot = 10;
  const availableSlot = maxSlot - personnel;
  let slotArr = new Array();
  let takenArr = new Array();
  for (let i = 0; i < maxSlot; i++) {
    slotArr.push({});
  }
  for (let i = 0; i < personnel; i++) {
    takenArr.push({});
  }
  if (isOpened) {
    return (
      <S.main>
        <S.Background onClick={closeModalHandler}></S.Background>
        <MDBAnimation
          type="bounceInUp"
          style={{
            position: 'fixed',
            zIndex: '100',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <S.PopupBackground>
            <S.ModalContent>
              <S.ModalTitle>
                <span style={{ color: '#f94e36' }}>{ottName}</span> 서비스를
                공유할
                <br />
                {title} 팟에 가입하시겠어요?
              </S.ModalTitle>
              <S.ModalIntroduction>{introduction}</S.ModalIntroduction>
              <ul>
                {/* <li>이 팟을 만든 팟장 id는 {adminUserId}</li>
                <li>이 팟에 가입 신청한 사람들은 {personnel}명</li> */}
                {slotArr.map(ico => (
                  <PersonRoundedIcon fontSize="large">{ico}</PersonRoundedIcon>
                ))}
                {takenArr.map(ico => (
                  <PersonOutlineRoundedIcon fontSize="large">
                    {ico}
                  </PersonOutlineRoundedIcon>
                ))}
                <S.ModalMessage>{availableSlot}자리 남았어요!</S.ModalMessage>
              </ul>
            </S.ModalContent>
            <S.ButtonContainer>
              <S.Button
                variant="contained"
                className="success"
                style={{ border: '0', outline: '0' }}
                endIcon={<SendRoundedIcon />}
              >
                이 팟 가입 요청하기
              </S.Button>
              <S.Button
                variant="contained"
                className="fail"
                onClick={closeModalHandler}
                style={{ border: '0', outline: '0' }}
                endIcon={<CancelRoundedIcon />}
              >
                다른 팟들 더 둘러보기
              </S.Button>
            </S.ButtonContainer>
          </S.PopupBackground>
        </MDBAnimation>
      </S.main>
    );
  } else {
    return <div></div>;
  }
};

export default Modal;

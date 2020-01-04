import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';

interface ModalProps {
  isOpened?: Boolean;
  close?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpened, close }) => {
  if (isOpened) {
    return (
      <S.main>
        <S.Background onClick={close}></S.Background>
        <MDBAnimation
          type="bounceInUp"
          style={{
            top: '10rem',
            position: 'absolute',
            zIndex: '100',
            left: '50%',
            transform: 'translate(-50%, 0%)',
          }}
        >
          <S.PopupBackground>
            <S.ContentContainer>
              <h1>title</h1>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
            </S.ContentContainer>
            <S.ButtonContainer>
              <button
                onClick={close}
                style={{ background: 'none', border: '0', outline: '0' }}
              >
                닫기
              </button>
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

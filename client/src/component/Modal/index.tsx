import React from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import Axios from 'axios';
interface ModalProps {
  isOpened?: Boolean;
  modalInfo;
  closeModalHandler?;
}

const Modal: React.FC<ModalProps> = ({
  isOpened,
  modalInfo,
  closeModalHandler,
}) => {
  const {
    title,
    introduction,
    adminUserId,
    createdAt,
    personnel,
    capacity,
    ottName,
    setClickedCard,
    partyCardId,
  } = modalInfo;

  const maxSlot = capacity;
  const availableSlot = maxSlot - personnel;
  let slotArr = new Array();
  let takenArr = new Array();
  for (let i = 0; i < availableSlot; i++) {
    slotArr.push({});
  }
  for (let i = 0; i < personnel; i++) {
    takenArr.push({});
  }

  const dummyMyUserId = 1;
  console.log(partyCardId);
  const participatePartyHandler = () => {
    const response1 = Axios.patch(
      `${process.env.REACT_APP_BACKEND_HOST}/parties/${partyCardId}`,
      {
        personnel: personnel + 1,
      },
    );

    const response2 = Axios.post(
      `${process.env.REACT_APP_BACKEND_HOST}/userparties`,
      {
        userId: dummyMyUserId,
        partyId: partyCardId,
      },
    );
    Promise.all([response1, response2]).then(values => {
      console.log('팟 참가 완료');
    });
  };

  if (!isOpened) return null;

  return (
    <S.main>
      <S.Background onClick={closeModalHandler}></S.Background>
      <MDBAnimation
        type="bounceInUp"
        style={{
          position: 'fixed',
          zIndex: '200',
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
            <S.ModalIntroduction></S.ModalIntroduction>
            <ul>
              <li>이 팟을 만든 팟장 id는 {adminUserId}</li>
              <li>이 팟에 가입 신청한 사람들은 {personnel}명</li>
              {slotArr.map(ico => (
                <PersonOutlineRoundedIcon
                  style={{ color: '#f94e36', fontSize: '4rem' }}
                >
                  {ico}
                </PersonOutlineRoundedIcon>
              ))}
              {takenArr.map(ico => (
                <PersonRoundedIcon
                  style={{ color: '#808080', fontSize: '4rem' }}
                >
                  {ico}
                </PersonRoundedIcon>
              ))}
              <S.ModalMessage>
                아직 {maxSlot}자리 중{' '}
                <span style={{ color: '#f94e36', fontWeight: 700 }}>
                  {availableSlot}
                </span>
                자리 남았어요!
              </S.ModalMessage>
            </ul>
          </S.ModalContent>
          <S.ButtonContainer>
            <S.Button
              variant="contained"
              className="success"
              style={{ border: '0', outline: '0' }}
              endIcon={<SendRoundedIcon />}
              onClick={participatePartyHandler}
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
};

export default Modal;

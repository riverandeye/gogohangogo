import styled from 'styled-components/macro';
import MaterialUiButton from '@material-ui/core/Button';
import COLORS from '../../styleConstants';

export const main = styled.div`
  text-align: center;
  position: relative;
`;

export const Background = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100vh;
  z-index: 50;
`;

export const PopupBackground = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 40rem;
  background: white;
  border-radius: 5rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const ModalIntroduction = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2;
`;

export const ModalMessage = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  line-height: 1.2;
`;
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  text-align: center;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  padding: '3% 0%';
  display: flex;
  justify-content: center;
  & > .success {
    background-color: ${COLORS.primaryLight};
    &:hover {
      background-color: ${COLORS.primary};
    }
  }
  & > .fail {
    background-color: #dcdcdc;
    &:hover {
      background-color: #bebebe;
    }
  }
`;

export const Button = styled(MaterialUiButton)`
  && {
    font-size: 1.6rem;
    margin: 1rem;
    font-family: 'NanumSquare', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

import styled from 'styled-components/macro';

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
  height: 100%;
  z-index: 50;
`;

export const PopupBackground = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 50rem;
  height: 40rem;
  background: white;
  border-radius: 5rem;
  font-family: nanumsquare;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  z-index: 100;
`;

export const ContentContainer = styled.div`
  margin-top: 5rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  text-align: center;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  padding: '3% 0%';
`;

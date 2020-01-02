import styled from 'styled-components/macro';

export const Subscribe = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.5rem;
`;

export const SubmitResult = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

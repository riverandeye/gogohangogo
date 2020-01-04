import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const PartyDetail = styled.div`
  display: flex;

  width: 100%;
  height: 50rem;
  margin: 5rem auto;
  padding: 0 10rem;
`;

export const PartyInformation = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
`;

export const ParticipantList = styled.div`
  flex: 0 0 auto;
  background-color: ${COLORS.secondaryLighter};
  margin-left: 5rem;
  padding: 1rem;
  width: 30rem;
`;

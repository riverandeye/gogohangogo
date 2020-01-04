import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const PartyDetail = styled.div`
  display: flex;
  width: 100%;
  margin: 5rem auto;
  padding: 0 10rem;
`;

export const PartyInformation = styled.div`
  flex: 1 0 auto;
  padding: 3rem;
  border-radius: 1rem;
  background-color: ${COLORS.secondaryLighter};
`;

export const ParticipantList = styled.div`
  flex: 0 0 auto;
  border-radius: 1rem;
  background-color: ${COLORS.secondaryLighter};
  margin-left: 5rem;
  padding: 1rem;
  width: 30rem;
  height: 55.5rem;
  overflow: auto;
`;

export const LogoAndState = styled.div`
  width: 30rem;
`;

export const PartyInformationTexts = styled.div`
  display: inline;
  background-color: 'blue';
`;

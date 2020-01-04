import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';
import PartyCard from '../../component/PartyCard';
export const Main = styled.div`
  width: 100%;
  background-color: beige;
`;
export const Title = styled.div`
  font-size: 3rem;
  color: #3c4146;
`;
export const Filter = styled.div`
  background-color: ${COLORS.secondaryLight};
  height: 5rem;
  & > div {
    position: fixed;
    width: 100%;
    z-index: 99;
  }
`;

export const Expansion = styled.div`
  background-color: ${COLORS.primaryLight};
  height: 5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  min-width: 48rem;
  padding: 0 20rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`;

export const GridLabel = styled.div`
  grid-column: 1/4;
  font-size: 3rem;
  color: #3c4146;
  height: 100%;
  padding-top: 2rem;
  line-height: 1.4;
`;

export const GridItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MainPartyCard = styled(PartyCard)`
  outline: none;
`;

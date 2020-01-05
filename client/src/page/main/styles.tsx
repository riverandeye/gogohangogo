import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';
import PartyCard from '../../component/PartyCard';
export const Main = styled.div`
  width: 100%;
  /* background-color: beige; */
  background-color: #f7ebeb;
`;
export const Title = styled.div`
  font-size: 3rem;
  color: #3c4146;
`;
export const Filter = styled.div`
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

export const FilterContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  & .radioInfo {
    margin: 0.2rem 0;
    font-size: 1.4rem;
  }
`;

export const OttFilterSection = styled.div`
  & label {
    width: 5rem;
    height: 5rem;
  }
  & .cc-selector {
    display: flex;
    flex-direction: row;
  }
`;
export const SortFilterSection = styled.div``;
export const FilterSubmitSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.4rem;
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

export const Group = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

export const FilterSectionLable = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

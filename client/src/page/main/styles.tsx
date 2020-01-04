import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

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
`;

export const GridContainer = styled.div`
  display: grid;
  min-width: 48rem;
  padding: 0 10rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
`;

export const GridLabel = styled.div`
  grid-column: 1/4;
  font-size: 3rem;
  color: #3c4146;
  height: 100%;
  padding-top: 1rem;
`;

export const GridItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

import MaterialAppBar from '@material-ui/core/AppBar';
import styled from 'styled-components/macro';
import COLORS from '../GlobalStyle/styleConstants';

const orderOfAppBar = 2;

export const AppBar = styled(MaterialAppBar)`
  && {
    background-color: ${COLORS.primaryLight};
    height: 4rem;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  position: relative;
  width: 3rem;
  margin: 0 auto;
`;

export const AppBarMenu = styled.ul`
  order: orderOfAppBar;
  margin-left: auto;
`;

export const AppBarItem = styled.li`
  float: left;
  margin-right: 1rem;
  font-weight: 500;
`;

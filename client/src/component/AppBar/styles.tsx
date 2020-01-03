import styled from 'styled-components/macro';

import MaterialAppBar from '@material-ui/core/AppBar';

export const AppBar = styled(MaterialAppBar)`
  && {
    /* background-color: rgba(249, 78, 54, 0.1
      ); */
    background-color: #ff8262;
    height: 6rem;
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
  width: 4.5rem;
  margin: 0 auto;
`;

export const AppBarMenu = styled.ul`
  color: black;
  order: 2;
  margin-left: auto;
`;

export const AppBarItem = styled.li`
  float: left;
  margin-right: 1rem;
  font-weight: 500;
`;

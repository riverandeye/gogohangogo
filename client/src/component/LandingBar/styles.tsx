import styled from 'styled-components/macro';

import MaterialAppBar from '@material-ui/core/AppBar';

export const LandingBar = styled(MaterialAppBar)`
  && {
    /* background-color: rgba(249, 78, 54, 0.1
      ); */
    background-color: #ff8262;
<<<<<<< HEAD
    font-family: 'NanumSquare', sans-serif;
=======
>>>>>>> add landing bar and carousel
    height: 6rem;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-left: 10rem;
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
<<<<<<< HEAD
  margin-top: 0.7rem;
=======
>>>>>>> add landing bar and carousel
  margin-left: auto;
  margin-right: 20rem;
`;

export const AppBarItem = styled.li`
  float: left;
  margin-right: 2rem;
  font-weight: 500;
`;

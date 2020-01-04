import styled from 'styled-components/macro';

export const main = styled.div`
  font-family: 'NanumSquare', sans-serif;
  color: #3c4146;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const title = styled.div`
  font-size: 3rem;
  color: #3c4146;
`;

export const Section1 = styled.div`
  height: 100rem;
`;

export const Flex = styled.div`
  display: flex;
  margin: 10rem 20rem;
  vertical-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Section2 = styled.div`
  height: 100rem;
`;

export const Card = styled.div`
  width: 40rem;
  background: white;
  border-radius: 5rem;
  margin: 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Footer = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  height: 10rem;
  background: white;
`;

export const FooterItem = styled.div`
  text-align: center;
  margin: 1rem;
`;

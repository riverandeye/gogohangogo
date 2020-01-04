import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const MyParty = styled.div`
  font-family: 'NanumSquare', sans-serif;
  padding: 10rem;

  background-color: ${COLORS.secondaryLight};
  height: 100vh;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PartyContainer = styled.div``;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  background-size: cover;
  margin-bottom: 2rem;
`;

export const ProfileUsername = styled.div`
  font-size: 3rem;
`;

export const ProfilePriority = styled.div`
  font-size: 2rem;
`;

export const ProfileEmail = styled.div`
  font-size: 1.5rem;
`;

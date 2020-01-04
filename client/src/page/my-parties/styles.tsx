import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const MyParty = styled.div`
  font-family: 'NanumSquare', sans-serif;
  padding: 10rem;

  background-color: ${COLORS.background};
  height: 100%;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PartyContainer = styled.div``;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin-right: 3rem;
  padding-right: 3rem;
  border-right: 0.1rem solid black;
`;

export const ProfileImage = styled.img`
  width: 25rem;
  height: 25rem;
  background-size: cover;
  margin-bottom: 2rem;
`;

export const ProfileUsername = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const ProfileIntroduction = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ProfilePriority = styled.div`
  font-size: 2rem;
`;

export const ProfileEmail = styled.div`
  font-size: 1.5rem;
`;

export const PartyList = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 0.1rem solid black;
  border-bottom: 0.1rem solid black;
  margin-bottom: 2rem;
`;

export const PartyListTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Party = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0.5rem;
`;

export const PartyImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
`;

export const PartyMeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .count {
    font-size: 1.5rem;
  }

  .email {
    font-size: 1.5rem;
  }

  .emailVerified {
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
  }
`;

export const PartyUserList = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 15rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
`;

export const PartyUser = styled.div`
  background-color: whitesmoke;
`;

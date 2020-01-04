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
  border-top: 0.1rem solid black;
  border-bottom: 0.1rem solid black;
  margin-bottom: 2rem;
`;

export const PartyListTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const PartyWrapper = styled.div`
  cursor: pointer;
  & {
    a {
      text-decoration: none;
      color: inherit;
    }
    a:hover {
      text-decoration: none;
      color: inherit;
    }
    position: relative;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-4%) scale(1.01);
      &.cardHover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 1;
      }
    }
  }
`;

export const Party = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2rem;
  width: 100%;
  border-radius: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const PartyHover = styled.div`
  position: absolute;
  opacity: 0;
  background-color: black;
  transition: all 0.7s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  display: flex;
  & > span {
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
`;

export const PartyImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
  border-radius: 2rem;
`;

export const PartyMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 48rem;
  margin-right: 2rem;
`;

export const PartyTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1.5rem;
`;

export const PartyDetail = styled.div`
  .count {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .email {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .emailVerified {
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .createdAt {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PartyUserImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  border-radius: 0.5rem;
`;

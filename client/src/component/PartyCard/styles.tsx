import styled from 'styled-components/macro';
import MaterialCard from '@material-ui/core/Card';
import MaterialAvatar from '@material-ui/core/Avatar';
import MaterialCardHeader from '@material-ui/core/CardHeader';
import MaterialCardContent from '@material-ui/core/CardContent';

import COLORS from '../../styleConstants';

export const Card = styled(MaterialCard)`
  && {
    position: relative;
    border-radius: 3rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-4%) scale(1.01);
      & > .cardHover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 1;
      }
    }
  }
`;
export const CardHover = styled.div`
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
  display: none;
  display: flex;
  & > .testText {
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
`;

export const CardHeader = styled(MaterialCardHeader)`
  width: 100%;
`;

export const CardContent = styled(MaterialCardContent)`
  /* height: 12rem; */
`;
export const CardHeaderTitle = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 2rem;
`;
export const CardSubHeader = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 1rem;
`;

export const Avatar = styled(MaterialAvatar)`
  && {
    background-color: ${COLORS.secondary};
    background-image: url('../../assets/OTT_icons/netflix.png');
  }
`;

export const PartyInfo = styled.div`
  color: ${COLORS.fontDark};
  font-size: 1.3rem;
`;

import styled from 'styled-components/macro';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardHeader from '@material-ui/core/CardHeader';
import MaterialCardContent from '@material-ui/core/CardContent';

export const Card = styled(MaterialCard)`
  margin-bottom: 1rem;
`;

export const CardHeader = styled(MaterialCardHeader)``;

export const CardContent = styled(MaterialCardContent)`
  && {
    padding: 0 1.6rem !important;
    font-size: 1.5rem;
  }
`;

export const CardHeaderTitle = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 2rem;
`;

export const CardSubHeader = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Email = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 1rem;
`;

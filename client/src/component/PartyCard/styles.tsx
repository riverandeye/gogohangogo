import styled from 'styled-components/macro';
import MaterialCard from '@material-ui/core/Card';
import MaterialAvatar from '@material-ui/core/Avatar';
import MaterialCardHeader from '@material-ui/core/CardHeader';

import COLORS from '../../styleConstants';

export const Card = styled(MaterialCard)`
  && {
    border-radius: 3rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    &:hover {
    }
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;
export const CardHover = styled.div`
  width: 100%;
`;

export const CardHeader = styled(MaterialCardHeader)`
  width: 100%;
`;
export const CardHeaderTitle = styled.span`
  font-size: 2rem;
`;
export const CardSubHeader = styled.span`
  font-size: 1rem;
`;

export const Avatar = styled(MaterialAvatar)`
  && {
    background-color: ${COLORS.secondary};
    background-image: url('../../assets/OTT_icons/netflix.png');
  }
`;

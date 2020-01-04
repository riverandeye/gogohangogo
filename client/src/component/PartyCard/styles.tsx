import styled from 'styled-components/macro';
import MaterialCard from '@material-ui/core/Card';
import MaterialAvatar from '@material-ui/core/Avatar';
import COLORS from '../../styleConstants';

export const Card = styled(MaterialCard)`
  width: 100%;
`;

export const Avatar = styled(MaterialAvatar)`
  width: 100%;
  background-color: ${COLORS.secondary};
`;

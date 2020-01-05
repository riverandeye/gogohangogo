import MaterialUiSpeedDial from '@material-ui/lab/SpeedDial';
import MaterialSpeedDialAction from '@material-ui/lab/SpeedDialAction';
import COLORS from '../../styleConstants';

import styled from 'styled-components/macro';

export const SpeedDial = styled(MaterialUiSpeedDial)`
  && {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    outline: none;
    text-decoration: none;
    border: none;
    & button {
      outline: none;
    }
    & > a {
      outline: none;
    }
  }
`;

export const SpeedDialAction = styled(MaterialSpeedDialAction)`
  && {
    font-size: 5rem;
    & label {
    }
  }
`;

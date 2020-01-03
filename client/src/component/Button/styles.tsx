import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';
interface ButtonPropsType {
  colortype: string;
  hasborder: string;
}

export const Button = styled(MaterialButton)`
  && {
    font-family: 'NanumSquare', sans-serif;
    background-color: ${(p: ButtonPropsType) => {
      switch (p.colortype) {
        case 'primary':
          return COLORS.primary;
        case 'secondary':
          return COLORS.secondary;
        default:
          return COLORS.primary;
      }
    }};
    font-weight: 700;
    color: ${COLORS.fontLight};
    border: ${(p: ButtonPropsType) => {
      return p.hasborder === 'true' ? '1px solid white' : '';
    }};
    font-size: 1.4rem;
  }
`;

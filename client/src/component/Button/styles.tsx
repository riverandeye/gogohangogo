import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components/macro';
import COLORS from '../GlobalStyle/styleConstants';
interface ButtonPropsType {
  colorType: string;
  hasBorder: boolean;
}

export const Button = styled(MaterialButton)`
  && {
    font-family: 'NanumSquare', sans-serif;
    background-color: ${(p: ButtonPropsType) => {
      switch (p.colorType) {
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
      return p.hasBorder === true ? '1px solid white' : '';
    }};
  }
`;

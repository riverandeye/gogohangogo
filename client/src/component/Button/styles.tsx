import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components/macro';
import { blue } from '@material-ui/core/colors';

interface ButtonPropsType {
  colorType: string;
  isBorder: string;
}

export const Button = styled(MaterialButton)`
  && {
    font-family: 'NanumSquare', sans-serif;
    background-color: ${(p: ButtonPropsType) => {
      switch (p.colorType) {
        case 'primary':
          return '#f94e36';
        case 'secondary':
          return '#FFB82B';
        default:
          return '#f94e36';
      }
    }};
    font-weight: 700;
    color: #ffffff;

    border: ${(p: ButtonPropsType) => {
      return p.isBorder == 'true' ? '1px solid white' : '';
    }};
  }
  /* && {
    font-family: 'NanumSquare', sans-serif;
    background-color: #f94e36;
    font-weight: 700;
    color: #ffffff;

  } */
`;

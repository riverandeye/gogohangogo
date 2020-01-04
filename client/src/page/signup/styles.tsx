import MaterialFormControl from '@material-ui/core/FormControl';
import MaterialTextField from '@material-ui/core/TextField';
import MaterialCheckBox from '@material-ui/core/Checkbox';
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const SignUpForm = styled(MaterialFormControl)`
  && {
    display: flex;
    width: 60%;
    max-width: 40rem;
    margin: auto;
    position: relative;
    justify-content: center;
  }
`;

export const SignUpTextField = styled(MaterialTextField)`
  && .MuiInputBase-input {
    font-size: 1.5rem;
  }
`;

export const SignUpCheckbox = styled(MaterialCheckBox)``;

export const SignUpCheckboxLabel = styled(MaterialFormControlLabel)`
  && .MuiFormControl-root {
    font-size: 1.5rem;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 1.2rem;
`;

export const SignUpFormLabel = styled.div`
  font-size: 3rem;
  display: flex;
  color: ${COLORS.fontDark};
  margin: auto;
`;

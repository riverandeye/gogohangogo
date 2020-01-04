import MaterialFormControl from '@material-ui/core/FormControl';
import MaterialTextField from '@material-ui/core/TextField';
import styled from 'styled-components/macro';

export const LoginForm = styled(MaterialFormControl)`
  && {
    position: absolute;
    top: 7rem;
    left: 70%;
  }
`;

export const LoginTextField = styled(MaterialTextField)``;

export const Container = styled.div``;

export const ErrorMessage = styled.div`
  font-size: 1.2rem;
`;

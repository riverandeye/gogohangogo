import MaterialFormControl from '@material-ui/core/FormControl';
import MaterialTextField from '@material-ui/core/TextField';
import styled from 'styled-components/macro';
import COLORS from '../../styleConstants';

export const Logo = styled.div`
  position: relative;
  width: 5rem;
  margin: 0 auto;
`;

export const LoginFormLabel = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 400;
`;
export const LoginForm = styled(MaterialFormControl)`
  && {
    width: 70%;
  }
`;

export const LoginTextField = styled(MaterialTextField)`
  && .MuiInputBase-input {
    font-size: 1.5rem;
  }
  && .MuiFormLabel-root {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  background-color: ${COLORS.fontLight};
  border-radius: 1rem;
  padding: 1rem;
  width: 35rem;
  height: 50rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const PostErrorMessage = styled.div`
  font-size: 1.2rem;
  color: ${COLORS.primaryDark}
`
export const ErrorMessage = styled.div`
  font-size: 1.2rem;
`;

export const SignUpText = styled.div`
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const SignUpLink = styled.a`
  text-decoration: none !important;
  color: ${COLORS.fontDark};
  font-size: 1.2rem;
`;

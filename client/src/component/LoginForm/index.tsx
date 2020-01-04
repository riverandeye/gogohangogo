import React from 'react';
import * as S from './styles';
import { useLogin } from './hooks';
import { observer } from 'mobx-react';
import Button from '../Button';
import logo from '../../assets/logo/npang_simple.png';

const LoginForm: React.FC = () => {
  const { formik, postErrorMessage, setpostErrorMessage } = useLogin();
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <S.Container>
      <S.LoginFormLabel>
        <S.Logo>
          <img src={logo} width="100%" alt="logo" />
        </S.Logo>
        NBread
      </S.LoginFormLabel>
      <S.LoginForm>
        <S.LoginTextField
          label="이메일"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        ></S.LoginTextField>
        <S.ErrorMessage>{errors.email ? errors.email : null}</S.ErrorMessage>
        <br></br>
        <S.LoginTextField
          label="비밀번호"
          id="password"
          name="password"
          type="password"
          onChange={e => {
            handleChange(e);
            setpostErrorMessage('');
          }}
          autoComplete="none"
          style={{ fontFamily: 'sans-serif' }}
          value={values.password}
        ></S.LoginTextField>
        <S.ErrorMessage>
          {errors.password ? errors.password : null}
        </S.ErrorMessage>
        <br></br>
        <S.PostErrorMessage>
          {postErrorMessage ? postErrorMessage : null}
        </S.PostErrorMessage>
        <br></br>
        <Button onClick={handleSubmit}>로그인</Button>
      </S.LoginForm>
      <S.SignUpText>아직 회원가입 하지 않으셨나요?</S.SignUpText>
      <S.SignUpLink href="/signup">회원 가입 하러가기</S.SignUpLink>
    </S.Container>
  );
};

export default observer(LoginForm);

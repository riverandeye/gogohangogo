import React from 'react';
import * as S from './styles';
import { useLogin } from './hooks';
import Button from '../Button';

const LoginForm: React.FC = () => {
  const { formik, postErrorMessage } = useLogin();
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <S.Container>
      <S.LoginForm>
        <S.ErrorMessage>
          {postErrorMessage ? postErrorMessage : null}
        </S.ErrorMessage>
        <S.LoginTextField
          label="이메일"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        ></S.LoginTextField>
        <S.ErrorMessage>{errors.email ? errors.email : null}</S.ErrorMessage>
        <S.LoginTextField
          label="비밀번호"
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          autoComplete="none"
          style={{ fontFamily: 'sans-serif' }}
          value={values.password}
        ></S.LoginTextField>
        <S.ErrorMessage>
          {errors.password ? errors.password : null}
        </S.ErrorMessage>
        <Button onClick={handleSubmit}>로그인</Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default LoginForm;

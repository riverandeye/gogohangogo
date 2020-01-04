import React from 'react';
import * as S from './styles';
import { useSignUp } from './hooks';
import Button from '../../component/Button';

const SignUp: React.FC = () => {
  const { formik, duplicateEmailError } = useSignUp();
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <>
      <S.SignUpFormLabel>회원가입</S.SignUpFormLabel>
      <S.SignUpForm>
        <S.SignUpInputLabel htmlFor="name"></S.SignUpInputLabel>
        이름
        <S.SignUpInput
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name ? errors.name : null}
        <br></br>
        <S.SignUpInputLabel htmlFor="이메일">이메일</S.SignUpInputLabel>
        <S.SignUpInput
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email
          ? errors.email
          : duplicateEmailError
          ? duplicateEmailError
          : null}
        <br></br>
        <S.SignUpInputLabel htmlFor="비밀번호">비밀번호</S.SignUpInputLabel>
        <S.SignUpInput
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          autoComplete="none"
          style={{ fontFamily: 'sans-serif' }}
          value={values.password}
        />
        {errors.password ? errors.password : null}
        <br></br>
        <S.SignUpCheckboxLabel
          control={
            <S.SignUpCheckbox
              id="agreeAlarm"
              name="agreeAlarm"
              checked={values.agreeAlarm}
              onChange={handleChange}
            />
          }
          label="서비스와 관련된 푸쉬 알람에 동의합니다."
        ></S.SignUpCheckboxLabel>
        <br></br>
        <Button onClick={handleSubmit}>Submit</Button>
      </S.SignUpForm>
    </>
  );
};

export default SignUp;

import React from 'react';
import * as S from './styles';
import { useSignUp } from './hooks';
import Button from '../../component/Button';

const SignUp: React.FC = () => {
  const { formik, postEmailValidation } = useSignUp();
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <>
      <div style={{ height: `6rem` }}></div>
      <S.SignUpForm>
        <S.SignUpFormLabel>회원가입</S.SignUpFormLabel>{' '}
        <S.SignUpTextField
          required
          id="name"
          label="이름"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        <S.ErrorMessage>{errors.name ? errors.name : null}</S.ErrorMessage>
        <br></br>
        <S.SignUpTextField
          required
          label="이메일"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <S.ErrorMessage>
          {errors.email
            ? errors.email
            : postEmailValidation
            ? postEmailValidation
            : null}
        </S.ErrorMessage>
        <br></br>
        <S.SignUpTextField
          required
          label="비밀번호"
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          autoComplete="none"
          style={{ fontFamily: 'sans-serif' }}
          value={values.password}
        />
        <S.ErrorMessage>
          {errors.password ? errors.password : null}
        </S.ErrorMessage>
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
        <Button onClick={handleSubmit}>회원가입</Button>
      </S.SignUpForm>
    </>
  );
};

export default SignUp;

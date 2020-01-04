import React from 'react';
import * as S from './styles';
import { useSignUp } from './hooks';

const SignUp: React.FC = () => {
  const { formik } = useSignUp();
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <S.signup>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name ? errors.name : null}
        <br></br>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? errors.email : null}
        <br></br>
        <label htmlFor="password">비밀번호</label>
        <input
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
        <input
          id="agreeAlarm"
          name="agreeAlarm"
          checked={values.agreeAlarm}
          type="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="agreeAlarm">
          서비스와 관련된 푸쉬알람에 동의합니다.
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </S.signup>
  );
};

export default SignUp;

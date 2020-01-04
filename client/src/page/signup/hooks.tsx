import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { VALIDATION_ERROR_MESSAGE, REGEX } from '../../constants';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
  agreeAlarm: boolean;
}

export const useSignUp = () => {
  // formik logic
  const [postEmailValidation, setpostEmailValidation] = useState('');
  const validationSchema = Yup.object({
    name: Yup.string().required(VALIDATION_ERROR_MESSAGE.REQUIRED_NAME),
    email: Yup.string()
      .email(VALIDATION_ERROR_MESSAGE.INVALID_EMAIL)
      .matches(REGEX.UNIV_EMAIL, VALIDATION_ERROR_MESSAGE.NON_UNIV_EMAIL)
      .required(VALIDATION_ERROR_MESSAGE.REQUIRED_EMAIL),
    password: Yup.string()
      .min(8, VALIDATION_ERROR_MESSAGE.MIN_8)
      .required(VALIDATION_ERROR_MESSAGE.REQUIRED_PW),
  });

  const handleSignUp = async (values: SignUpDto) => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_HOST}/users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    );
    if (!response.ok) {
      const { message } = await response.json();
      setpostEmailValidation(message);
    }
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', agreeAlarm: false },
    onSubmit: handleSignUp,
    validationSchema,
  });

  return {
    formik,
    postEmailValidation,
  };
};

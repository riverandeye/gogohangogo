import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { VALIDATION_ERROR_MESSAGE } from '../../constants';
import RootStore from '../../stores/root';

interface LoginDTO {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export const useLogin = () => {
  const { user } = RootStore();

  const [postErrorMessage, setpostErrorMessage] = useState('');
  const validationSchema = Yup.object({
    email: Yup.string().required(VALIDATION_ERROR_MESSAGE.REQUIRED_EMAIL),
    password: Yup.string().required(VALIDATION_ERROR_MESSAGE.REQUIRED_PW),
  });

  const handleLogin = async (values: LoginDTO) => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_HOST}/users/login`,
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
      // TODO: set error msg....
      setpostErrorMessage(message);
    }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: handleLogin,
    validationSchema,
  });

  return {
    formik,
    postErrorMessage,
    setpostErrorMessage,
  };
};

import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
  agreeAlarm: boolean;
}

export const useSignUp = () => {
  // formik logic
  const validationSchema = Yup.object({
    name: Yup.string().required('이름을 입력해주세요.'),
    email: Yup.string()
      .email('유효한 이메일이 아닙니다.')
      .required('이메일을 입력해주세요.'),
    password: Yup.string()
      .min(8, '8글자 이상으로 입력해주세요.')
      .required('패스워드를 입력해주세요.'),
  });

  const handleSignUp = async (values: SignUpDto) => {
    console.log(
      `${values.name} ${values.email} ${values.name} ${values.agreeAlarm}`,
    );
    console.log(JSON.stringify(values));
    await fetch(`${process.env.REACT_APP_BACKEND_HOST}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    });
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', agreeAlarm: false },
    onSubmit: handleSignUp,
    validationSchema,
  });

  return {
    formik,
  };
};

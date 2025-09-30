import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import InputField from '../../../components/input';
// import Link from 'antd/es/typography/Link';
// import { useNavigate } from 'react-router-dom';
interface LoginFormData {
  email: string;
  password: string;
}

const SignUpForm = () => {
//   const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md">
        <h1 className="mb-4 text-center text-2xl font-bold">Đăng ký tài khoản</h1>

        <InputField
          name="email"
          control={control}
          label="Email"
          placeholder="Nhập Email"
          rules={{
            required: 'Trường này là bắt buộc',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email không hợp lệ',
            },
          }}
        />

        <InputField
          name="password"
          control={control}
          type="password"
          label="Mật khẩu"
          placeholder="Nhập mật khâu"
          rules={{
            required: 'Trường này là bắt buộc',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
              message:
                'Mật khẩu phải có 8–20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt',
            },
          }}
        />

        <Button size="large" type="primary" htmlType="submit" className="custom-btn mt-4 w-full">
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

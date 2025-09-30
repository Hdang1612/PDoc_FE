import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import InputField from '../../../components/input';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
const ForgotPwdForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<any>();

  const onSubmit = (email: any) => {
    console.log('Login data:', email);
    navigate('/auth/confirm-otp');
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md">
        <h1 className="mb-4 text-2xl font-bold">Quên mật khẩu</h1>
        <p className="mb-3 text-sm">
          Vui lòng nhập địa chỉ email của bạn và kiểm tra hộp thư đến để lấy mật khẩu mới.
        </p>
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

        <Button size="large" type="primary" htmlType="submit" className="custom-btn mt-4 w-full">
          Xác nhận
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link onClick={() => navigate('/auth/register')}>Don't have an account? Sign up now!</Link>
      </div>
    </div>
  );
};

export default ForgotPwdForm;

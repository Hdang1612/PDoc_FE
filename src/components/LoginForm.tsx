import { Button, Typography } from 'antd';
// import { GoogleOutlined, FacebookOutlined, AppleOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const { Title, Text, Link } = Typography;

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login data:', data);
  };

  return (
    <>
      <div className="w-max-[600px] mx-auto w-[500px] max-w-md rounded bg-white p-8 shadow-md">
        <Title level={2} className="mb-6">
          Đăng nhập
        </Title>

        {/* <div className="mb-6 flex flex-col gap-3">
          <Button icon={<GoogleOutlined />} block>
            Sign in with Google
          </Button>
          <Button icon={<FacebookOutlined />} block>
            Sign in with Facebook
          </Button>
          <Button icon={<AppleOutlined />} block>
            Sign in with Apple
          </Button>
        </div> */}

        {/* <Divider>Or use your email</Divider> */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Username or Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Nhập Email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email không hợp lệ',
                },
              }}
              render={({ field }) => (
                <Input
                  className=""
                  style={{ padding: '12px 16px', borderRadius: '20px' }}
                  {...field}
                  placeholder="bob@memrise.com"
                />
              )}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="mb-1 block font-medium">Password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'You need to enter your password',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
                  message:
                    'Mật khẩu phải có 8–20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt',
                },
              }}
              render={({ field }) => (
                <Input.Password
                  style={{ padding: '12px 16px', borderRadius: '20px' }}
                  {...field}
                  placeholder="••••••••"
                />
              )}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-2 flex justify-end">
            <Link>Forgot my password</Link>
          </div>

          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Text>
            <Link>Don't have an account? Sign up now!</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

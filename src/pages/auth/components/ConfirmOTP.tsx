import { Button, GetProps, Input } from 'antd';
import { useState } from 'react';

const ConfirmOTP = () => {
  const [otp, setOtp] = useState('');
  type OTPProps = GetProps<typeof Input.OTP>;
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
    setOtp(text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };
  return (
    <div className="w-full flex-col">
      <h2 className="mb-4 text-2xl font-bold">Nhập mã xác nhận</h2>
      <div className="opt-input flex justify-center">
        <Input.OTP separator={() => <span>—</span>} {...sharedProps} />
      </div>
      <p className="mt-4 text-sm">
        Chưa nhận được mã ? <span className="cursor-pointer hover:text-[#9a1d30]">Gửi lại</span>
      </p>
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        className="custom-btn mt-4 w-full"
        disabled={otp.length !== 6}
      >
        Xác nhận
      </Button>
    </div>
  );
};

export default ConfirmOTP;

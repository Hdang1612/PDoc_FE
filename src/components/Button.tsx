import { Button, ConfigProvider } from 'antd';
import { LoadingOverlay } from './overlayloading';
import { ReactNode, useState } from 'react';
interface LoadingButtonProps {
  size?: 'small' | 'large';
  children?: ReactNode;
  onclick?: () => void;
}
const DemoLoadingButton: React.FC<LoadingButtonProps> = ({
  size = 'small',
  // onclick,
  children,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // onclick?.(e);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            controlHeight: size === 'large' ? 48 : 32,
            paddingInline: size === 'large' ? 24 : 12,
          },
        },
      }}
    >
      <Button onClick={handleClick} {...rest}>
        {children}
      </Button>
      <LoadingOverlay visible={loading} />
    </ConfigProvider>
  );
};

export default DemoLoadingButton;

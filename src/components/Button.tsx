import { Button } from 'antd';
import { LoadingOverlay } from './overlayloading';
import { useState } from 'react';

const DemoLoadingButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button onClick={handleClick}>Fetch</Button>
      <LoadingOverlay visible={loading} />
    </>
  );
};

export default DemoLoadingButton;

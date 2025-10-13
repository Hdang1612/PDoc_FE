import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { statusMessages } from '../constants/router';

const NotFound = ({ statusCode }: { statusCode: any }) => {
  const navigate = useNavigate();
  return (
    <Result
      status={statusCode}
      title={statusCode}
      subTitle={statusMessages[statusCode]}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Quay về trang chủ
        </Button>
      }
    />
  );
};

export default NotFound;

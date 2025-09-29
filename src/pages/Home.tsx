import { Button } from 'antd';
import { ToastContainerConfig } from '../components/ToastContainer';
import { showSuccess } from '../utils/toast';

const Home = () => {
  const handleSubmit = () => {
    showSuccess('Thêm mới thành công!');
  };
  return (
    <>
      <p className="font-body text-gradient-red-orange py-5">ấdfadfafasdfasdf</p>
      <button
        className="font-body cursor-pointer px-4 py-2 text-black sm:px-8 sm:py-3"
        onClick={handleSubmit}
        // style={{ background: 'var(--gradient-red-orange)' }}
      >
        hello
      </button>
      <Button color="default" shape="round" variant="solid" size="middle">
        Solid
      </Button>
      {/* <Button /> */}
      <ToastContainerConfig />
    </>
  );
};

export default Home;

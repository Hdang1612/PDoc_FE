import { Button } from "antd";
import { ToastContainerConfig } from "../components/ToastContainer";
import { showSuccess } from "../utils/toast";

const Home = () => {
    const handleSubmit = () => {
        showSuccess("Thêm mới thành công!");
      };
  return (
    <>
      <button onClick={handleSubmit}>hello</button>
      <Button />
      <ToastContainerConfig />
    </>
  )
}

export default Home
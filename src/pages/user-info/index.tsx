import { Avatar, Badge, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubjectCard from '../../components/subjectcard';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';
import CommonModal from '../../components/modal';
import { useRef, useState } from 'react';
import UserUpdateForm, { UserFormValues } from './components/FormUpdate';
import { updateUser } from '../../api/userService';
import { showError, showSuccess } from '../../utils/toast';
const UserInfo = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<any>(null);

  const handleSubmitForm = async (values: UserFormValues) => {
    try {
      //   setLoading(true);
      //   await updateUser(123, values);
      showSuccess('Update thành thành công!');
      setLoading(false);
      //   onUpdated?.(); // reload lại data ở bảng cha nếu có
    } catch (error: any) {
      console.error(error);
      showError(error);
    }
  };

  const handleOk = () => {
    if (formRef.current) {
      formRef.current.handleSubmit(handleSubmitForm)();
    }
  };
  return (
    <div>
      <h1 className="heading-page">Thông tin cá nhân</h1>
      <div className="shadow-tertiary w-full rounded-sm bg-white px-10 py-4">
        <div className="btn-container mb-5 flex gap-2">
          <Button
            onClick={() => setOpen(true)}
            icon={<img src="/icons/update.svg" alt="" className="h-5 w-5" />}
            type="primary"
          >
            Cập nhật hồ sơ
          </Button>
          <Button>xxx</Button>
        </div>
        <div className="user-container flex">
          <div className="l-container flex w-1/3 flex-col items-center gap-4 border-r-[1px] border-[#ccc] px-2 py-8">
            <Avatar src={undefined} size={120} icon={<UserOutlined />} />
            <p className="text-lg uppercase">To Hai Dang</p>
            <div className="info-container grid w-full grid-cols-2 gap-6">
              <p>Mã sinh viên :</p>
              <p>AAA</p>
              <p>Họ và tên :</p>
              <p>AAA</p>
              <p>Giới tính :</p>
              <p>AAA</p>
              <p>Ngày sinh :</p>
              <p>AAA</p>
              <p>Số điện thoại :</p>
              <p>AAA</p>
              <p>Email :</p>
              <p>AAA</p>
              <p>Số điện thoại :</p>
              <p>AAA</p>
              <p>Chuyên ngành: </p>
              <p>AAA</p>
            </div>
          </div>
          <div className="r-container max-h-[650px] overflow-auto pr-2 pl-6">
            <div className="heading-page flex items-start justify-between gap-2">
              <div className="favo flex items-start gap-2">
                Yêu thích{' '}
                <Badge
                  className="site-badge-count-109"
                  count={20}
                  style={{ backgroundColor: '#1890FF' }}
                />
              </div>
              <Link className="cursor-pointer" onClick={() => navigate('/')}>
                Xem thêm
              </Link>
            </div>
            <div className="favorite-list grid grid-cols-3 gap-3">
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
            </div>
            <div className="heading-page mt-5 flex items-start justify-between gap-2">
              <div className="favo flex items-start gap-2">
                Tải xuống gần đây{' '}
                <Badge
                  className="site-badge-count-109"
                  count={20}
                  style={{ backgroundColor: '#1890FF' }}
                />
              </div>
              <Link className="cursor-pointer" onClick={() => navigate('/')}>
                Xem thêm
              </Link>
            </div>
            <div className="favorite-list grid grid-cols-3 gap-3">
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
              <SubjectCard
                // image={exam.imageUrl}
                // fallbackImage="/default-exam.jpg"
                loading={false}
                // width="300px"
                title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
                date="15/03/2025"
                questions={120}
                views={5178}
                orgName="TNM HUBT"
                onClick={() => console.log('exam clicked')}
              />
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        open={open}
        title="Cập nhật thông tin người dùng"
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        confirmLoading={loading}
        width={800}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <UserUpdateForm
          formRef={formRef}
          defaultValues={{
            studentCode: 'SV001',
            fullName: 'Tô Hải Đăng',
            gender: 'male',
            birthDate: '2000-01-01',
            phone: '0123456789',
            email: 'dang@.com',
            major: 'Công nghệ thông tin',
          }}
        />
      </CommonModal>
    </div>
  );
};

export default UserInfo;

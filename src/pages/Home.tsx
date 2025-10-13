import { Button } from 'antd';
import { showSuccess } from '../utils/toast';
import SelectInput from '../components/select';
import { useState } from 'react';
import RadioCheckboxGroup from '../components/radio&checkbox';
import DateInput from '../components/datepicker';
import { Dayjs } from 'dayjs';
import TableBase from '../components/table';
import PaginationBase from '../components/pagination';
import DemoLoadingButton from '../components/Button';
// import SideBar from '../components/sidebar';
import { usePermission } from '../hooks/usePermission';
import { Role } from '../interface/role';
import { storage } from '../utils/localStorage';
import SearchBar from '../components/searchbar';
import CommonModal from '../components/modal';
import SubjectCard from '../components/subjectcard';
import { shareService } from '../utils/share';

const Home = () => {
  storage.set('role', 'teacher');
  const { role, hasRole } = usePermission();
  const loading: boolean = false;
  const options = [
    { label: 'Hà Nội', value: 'Hà Nội' },
    { label: 'HCM', value: 'HCM' },
    { label: 'Đà Nẵng', value: 'Đà Nẵng' },
  ];
  interface User {
    id: number;
    name: string;
    email: string;
  }
  const handleSubmit = () => {
    showSuccess('Thêm mới thành công!');
  };
  const shareToFacebook = () => {
    const shareUrl = encodeURIComponent('https://example.com/san-pham-abc');
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      'fbShareWindow',
      'width=600,height=500,left=200,top=100,toolbar=no,menubar=no,scrollbars=no,resizable=yes'
    );
  };

  const handleSearch = (query: string) => {
    // sau này gọi API ở đây
    console.log('Searching for:', query);
  };
  const [data, setData] = useState<User[]>([
    { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
  ]);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Tên', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
  ];
  const [city, setCity] = useState<string | number>();
  const [cities, setCities] = useState<(string | number)[]>([]);
  const [gender, setGender] = useState('male');
  const [hobbies, setHobbies] = useState(['coding']);
  const [dob, setDob] = useState<Dayjs>();
  const [range, setRange] = useState<[Dayjs, Dayjs]>();
  const [open, setOpen] = useState(false);
  const handleConfirm = () => {
    console.log('Đã xác nhận');
    setOpen(false);
  };
  return (
    <>
      <h2>Current Role: {role ?? 'guest'}</h2>
      <SearchBar placeholder="Search users, courses..." onSearch={handleSearch} />
      {hasRole([Role.Admin, Role.Student]) && <button>Manage Users</button>}
      <button
        className="font-body cursor-pointer px-4 py-2 text-black sm:px-8 sm:py-3"
        onClick={shareToFacebook}
        // style={{ background: 'var(--gradient-red-orange)' }}
      >
        hello
      </button>
      <Button onClick={handleSubmit} shape="round" variant="solid">
        Solid
      </Button>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <DemoLoadingButton>Hello</DemoLoadingButton>
      <SubjectCard
        // image={exam.imageUrl}
        // fallbackImage="/default-exam.jpg"
        loading={loading}
        width="400px"
        title="Lịch sử Đảng cộng sản Việt Nam HUBT (chuẩn 2025)"
        date="15/03/2025"
        questions={120}
        views={5178}
        orgName="TNM HUBT"
        onClick={() => console.log('exam clicked')}
      />
      {/* <Button /> */}
      {/* <ToastContainerConfig /> */}
      <div className="flex flex-col gap-4 p-4">
        {/* Single Select */}
        <SelectInput label="Thành phố" value={city} options={options} onChange={setCity} />

        {/* Multi Select */}
        <SelectInput
          label="Chọn nhiều thành phố"
          value={cities}
          options={options}
          onChange={setCities}
          mode="multiple"
        />
      </div>
      <RadioCheckboxGroup
        label="Giới tính"
        value={gender}
        options={[
          { label: 'Nam', value: 'male' },
          { label: 'Nữ', value: 'female' },
        ]}
        onChange={setGender}
        mode="radio"
      />

      <RadioCheckboxGroup
        label="Sở thích"
        value={hobbies}
        options={[
          { label: 'Coding', value: 'coding' },
          { label: 'Music', value: 'music1' },
          { label: 'Music', value: 'music2' },
          { label: 'Music', value: 'music3' },
          { label: 'Music', value: 'music4' },
        ]}
        onChange={setHobbies}
        mode="checkbox"
      />

      <DateInput label="Ngày sinh" value={dob} mode="single" onChange={setDob} />

      <DateInput label="Khoảng thời gian" value={range} mode="range" onChange={setRange} />
      <div className="p-4">
        <TableBase<User>
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={false} // ✅ dùng pagination riêng
        />

        <PaginationBase
          current={current}
          pageSize={pageSize}
          total={50}
          onChange={(page, size) => {
            setCurrent(page);
            setPageSize(size);
          }}
        />
      </div>

      <CommonModal
        // confirmLoading={true}
        open={open}
        title="Xác nhận xóa người dùng"
        onOk={handleConfirm}
        onCancel={() => setOpen(false)}
      >
        <p>Bạn có chắc chắn muốn xóa người dùng này không?</p>
      </CommonModal>
    </>
  );
};

export default Home;

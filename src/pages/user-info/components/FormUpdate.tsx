import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, DatePicker, Select, Avatar } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export interface UserFormValues {
  studentCode: string;
  fullName: string;
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
  major: string;
}

interface UserUpdateFormProps {
  defaultValues?: UserFormValues;
  formRef: React.MutableRefObject<ReturnType<typeof useForm<UserFormValues>> | null>;
}

const genderOptions = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
  { label: 'Khác', value: 'other' },
];

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ defaultValues, formRef }) => {
  const formMethods = useForm<UserFormValues>({
    defaultValues: defaultValues || {},
  });

  // Gán form ra ngoài qua ref để component cha có thể gọi handleSubmit
  formRef.current = formMethods;

  const { control } = formMethods;
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  return (
    <div className="user-container flex">
      <div className="l-container flex w-1/3 flex-col items-center gap-4 border-r border-gray-300 px-6 py-8">
        <div className="group relative">
          <Avatar src={avatarUrl} size={120} icon={<UserOutlined />} className="cursor-pointer" />

          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={() => fileInputRef.current?.click()}
          >
            <EditOutlined className="text-xl text-white" />
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <p className="text-lg font-semibold uppercase">
          {defaultValues?.fullName || 'Chưa có tên'}
        </p>
      </div>

      <div className="r-container grid flex-1 grid-cols-2 gap-x-8 gap-y-5 px-8 py-6">
        <label className="col-span-1 text-gray-600">Mã sinh viên:</label>
        <Controller
          name="studentCode"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <label className="col-span-1 text-gray-600">Họ và tên:</label>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <label className="col-span-1 text-gray-600">Giới tính:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select {...field} options={genderOptions} placeholder="Chọn giới tính" />
          )}
        />

        <label className="col-span-1 text-gray-600">Ngày sinh:</label>
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              value={field.value ? dayjs(field.value) : null}
              format="DD/MM/YYYY"
              className="w-full"
            />
          )}
        />

        <label className="col-span-1 text-gray-600">Số điện thoại:</label>
        <Controller name="phone" control={control} render={({ field }) => <Input {...field} />} />

        <label className="col-span-1 text-gray-600">Email:</label>
        <Controller name="email" control={control} render={({ field }) => <Input {...field} />} />

        <label className="col-span-1 text-gray-600">Chuyên ngành:</label>
        <Controller name="major" control={control} render={({ field }) => <Input {...field} />} />
      </div>
    </div>
  );
};

export default UserUpdateForm;

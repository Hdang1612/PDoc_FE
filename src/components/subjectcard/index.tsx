import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import { CalendarOutlined, FileTextOutlined, EyeOutlined } from '@ant-design/icons';
import fallbackImg from '../../assets/images/fallback-subject.jpg';

interface SubjectCardProps {
  image?: string;
  fallbackImage?: string;
  title: string;
  date: string;
  questions: number;
  views: number;
  orgName: string;
  width?: string | number;
  loading: boolean;
  onClick?: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  image,
  fallbackImage = fallbackImg, // ảnh mặc định
  title,
  date,
  questions,
  views,
  orgName,
  width,
  loading,
  onClick,
}) => {
  return (
    <Card
      loading={loading}
      style={{ width: width as string | number }}
      className="w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-xl"
      cover={
        <img src={image || fallbackImage} alt="exam-banner" className="h-40 w-full object-cover" />
      }
    >
      <h3 className="mb-2 line-clamp-2 text-base leading-5 font-bold">{title}</h3>

      <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
        <CalendarOutlined />
        <span>{date}</span>
      </div>

      <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
        <Tooltip title="Số câu hỏi">
          <div className="flex items-center gap-1">
            <FileTextOutlined />
            <span>{questions}</span>
          </div>
        </Tooltip>

        <Tooltip title="Lượt xem">
          <div className="flex items-center gap-1">
            <EyeOutlined />
            <span>{views}</span>
          </div>
        </Tooltip>
      </div>

      <div className="mb-1 flex items-center gap-2 text-sm">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="font-medium">{orgName}</span>
      </div>

      <Button type="primary" block className="mt-2" onClick={onClick}>
        Xem tài liệu
      </Button>
    </Card>
  );
};

export default SubjectCard;

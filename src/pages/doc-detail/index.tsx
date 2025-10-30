import { useState } from 'react';
import fallbackImg from '../../assets/images/fallback-subject.jpg';
import { CalendarOutlined, FileTextOutlined, EyeOutlined } from '@ant-design/icons';
import Tooltip from 'antd/es/tooltip';
import { Button } from 'antd';
import LikeBtn from '@assets/icons/like-icon.svg?react';
const DocumentDetail = () => {
  const [image, setImage] = useState(undefined);
  return (
    <div>
      <h1 className="heading-page">Thông tin tài liệu</h1>
      <div className="shadow-tertiary flex w-full gap-2 rounded-sm bg-[#ffffff] px-10 py-6">
        <div className="doc-img w-1/2 lg:w-1/3">
          <img src={image || fallbackImg} alt="docs-banner" className="h-40 w-full object-cover" />
        </div>
        <div className="doc-info w-1/3 flex-col gap-3">
          <h3 className="mb-2 line-clamp-2 text-base leading-5 font-bold">Tài liệu abc</h3>

          <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
            <CalendarOutlined />
            <span>date</span>
          </div>

          <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
            <Tooltip title="Số câu hỏi">
              <div className="flex items-center gap-1">
                <FileTextOutlined />
                <span>xxxx</span>
              </div>
            </Tooltip>

            <Tooltip title="Lượt xem">
              <div className="flex items-center gap-1">
                <EyeOutlined />
                <span>20000</span>
              </div>
            </Tooltip>
          </div>
          <div className="flex items-center gap-1.5">
            <LikeBtn className="h-8 w-8 cursor-pointer"></LikeBtn> 20000
          </div>

          <div className="mb-1 flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-medium">FFFF</span>
          </div>
          <div className="flex gap-3">
            <Button type="primary" className="mt-2">
              Xem tài liệu
            </Button>
            <Button type="primary" className="mt-2">
              Tải về
            </Button>
          </div>
        </div>
        <div className="doc-btns flex w-1/3 flex-col">
          <h1 className="mb-2 line-clamp-2 text-base leading-5 font-bold">Chia sẻ tài liệu</h1>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;

import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import './style.css';
const SideBar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <div className="h-screen flex-col overflow-hidden">
      {/* Menu */}
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        defaultSelectedKeys={['1']}
        items={[
          { key: '1', icon: <UserOutlined />, label: 'Users' },
          { key: '2', icon: <VideoCameraOutlined />, label: 'Videos' },
          { key: '3', icon: <UploadOutlined />, label: 'Uploads' },
          {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
              { key: '5', label: 'Option 5' },
              { key: '6', label: 'Option 6' },
              { key: '7', label: 'Option 7' },
              { key: '8', label: 'Option 8' },
            ],
          },
        ]}
      />
    </div>
  );
};

export default SideBar;

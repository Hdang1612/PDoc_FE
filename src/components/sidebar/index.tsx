import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logomini.png';
import './style.css';
import { Link } from 'react-router-dom';
const SideBar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <div className="h-screen flex-col overflow-hidden">
      {/* Logo */}
      <Link
        to="/"
        style={{
          //   width: '100%',
          height: collapsed ? '80px' : 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          cursor: 'pointer',
          //   padding: collapsed ? 0 : '0 16px',
          //   transition: 'all 0.3s',
        }}
      >
        <img
          src={logo}
          alt="logo"
          className={`h-full transform duration-500 ease-in-out ${collapsed ? 'w-[80px]' : 'w-[128px]'}`}
        />
        <span
          className={`font-body text-text inline-block w-full transform overflow-hidden text-2xl font-bold whitespace-nowrap capitalize transition-all duration-500 ease-in-out ${collapsed ? 'max-w-0 opacity-0' : 'max-w-[240px] opacity-100'} `}
        >
          PTIT toàn thư
        </span>
      </Link>

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

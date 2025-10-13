import { Outlet } from 'react-router-dom';
import SideBar from '../../components/sidebar';
import { BellOutlined, LeftOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { useState } from 'react';
import './style.css';
// import Header from './Header';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpg';
import logo from '../../assets/images/logomini.png';
import CommonDropdown from '../../components/dropdown';
const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userMenuItems = [
    {
      key: 'profile',
      label: 'Thông tin cá nhân',
      icon: <UserOutlined />,
      onClick: () => console.log('Đi đến trang profile'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: 'Đăng xuất',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => console.log('Đăng xuất'),
    },
  ];
  return (
    <Layout>
      <div>
        <div className="header flex h-[80px] w-full items-center justify-between gap-1 bg-white ps-2 pe-6">
          {/* Logo */}
          <Link
            to="/"
            style={{
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              src={logo}
              alt="logo"
              className={`h-full w-[80px] transform duration-500 ease-in-out`}
            />
          </Link>
          <div className="right-container flex items-center gap-3">
            {/* <Button icon={<BellOutlined style={{ fontSize: '18px', color: 'white' }} />} /> */}
            <CommonDropdown
              placement="bottomRight"
              tooltip="Thông báo"
              triggerElement={
                <Button
                  type="primary"
                  icon={<BellOutlined style={{ fontSize: '18px', color: 'white' }} />}
                ></Button>
              }
              menuItems={[
                {
                  key: 'edit',
                  label: 'Chỉnh sửa',
                  onClick: () => console.log('Click Edit'),
                },
                {
                  key: 'delete',
                  label: 'Xóa',
                  danger: true,
                  onClick: () => console.log('Click Delete'),
                },
              ]}
            />
            <CommonDropdown
              triggerElement={
                <div className="user-container flex cursor-pointer items-center gap-2">
                  <div className="avatar h-10 w-10 overflow-hidden rounded-full">
                    <img className="w-full" src={avatar} />
                  </div>
                  <p className="u-name">To Hai Dang</p>
                </div>
              }
              menuItems={userMenuItems}
              triggerType={['hover']}
              placement="bottom"
            />
          </div>
        </div>
      </div>
      <Layout>
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          width={220}
          collapsedWidth={80}
          onCollapse={(value) => setCollapsed(value)}
          className="fixed top-[65px] left-0 h-[calc(100vh-65px)] overflow-auto bg-white shadow-md"
        >
          <SideBar collapsed={collapsed} />
        </Sider>
        <div className="relative">
          <div
            className="bg-orange absolute top-[20vh] left-[-20px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            <div
              className={`transition-transform duration-500 ${collapsed ? '-rotate-180' : 'rotate-0'}`}
            >
              <LeftOutlined />
            </div>
          </div>
        </div>
        <Content>
          <div className="px-6 py-4 pt-[65px]">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

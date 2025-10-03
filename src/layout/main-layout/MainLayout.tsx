import { Outlet } from 'react-router-dom';
import SideBar from '../../components/sidebar';
import { LeftOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { useState } from 'react';
import './style.css';
import Header from './Header';
const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        collapsible
        trigger={null}
        collapsed={collapsed}
        width={320}
        collapsedWidth={80}
        onCollapse={(value) => setCollapsed(value)}
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
        <Header />
        <div className="px-6 py-4">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;

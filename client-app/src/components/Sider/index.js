import React from "react";
import './index.less'
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  CalendarOutlined,
  LogoutOutlined,
  SortAscendingOutlined
} from '@ant-design/icons';
import {
  Link,
  useLocation

} from 'react-router-dom';
const { Sider } = Layout;

function WordSider({ collapsed }) {
  const location = useLocation();
  return (

    <React.StrictMode>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/home" icon={<HomeOutlined />} >
            <Link to="/home">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/search" icon={<SearchOutlined />}>
            <Link to="/search">
              Test
            </Link>
          </Menu.Item>
          <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
            <Link to="/calendar">
              Create Grammer
            </Link>
          </Menu.Item>
          <Menu.Item key="/listgrammer" icon={<UserOutlined />}>
            <Link to="/listgrammer">
              List  Grammer
            </Link>
          </Menu.Item>
          <Menu.Item key="/podium" icon={<SortAscendingOutlined />}>
            <Link to="/podium">
              Podium
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>
            <Link to="/profilePage/0">
            Profile
          </Link>
          <Menu.Item key="7"></Menu.Item>
          <Menu.Item key="8"></Menu.Item>
          <Menu.Item key="9"></Menu.Item>
          <Menu.Item key="10"></Menu.Item>
          <Menu.Item key="11"></Menu.Item>
          <Menu.Item key="12"></Menu.Item>
          <Menu.Item key="13"></Menu.Item>
          <Menu.Item key="14"></Menu.Item>
          <Menu.Item key="15"></Menu.Item>
          <Menu.Item key="16"></Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to="/logout">
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </React.StrictMode>
  );
}

export default WordSider;
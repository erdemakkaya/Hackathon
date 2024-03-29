import React from "react";
import './index.less'
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  CalendarOutlined,
  LogoutOutlined,
  StarOutlined
} from '@ant-design/icons';
import {
  Link,
  useLocation

} from 'react-router-dom';
import MyJson from "../../db/db.json"

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
              Search for help
            </Link>
          </Menu.Item>
          <Menu.Item key="/meetings" icon={<CalendarOutlined />}>
            <Link to="/meetings">
              Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="/podium" icon={<StarOutlined />}>
            <Link to="/podium">
              Podium
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}><Link to={"/profilePage"}>Profile</Link></Menu.Item>
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
          <Menu.Item key="17"></Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to="/login">
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </React.StrictMode>
  );
}

export default WordSider;
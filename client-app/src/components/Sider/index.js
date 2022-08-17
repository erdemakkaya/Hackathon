import React from "react";
import './index.less'
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined
  } from '@ant-design/icons';
  import {
    Link,
    useLocation    

  } from 'react-router-dom';
const { Sider } = Layout;

function WordSider({collapsed}) {
  const location = useLocation();
  return (
    
    <React.StrictMode>
         <Sider trigger={null} collapsible collapsed={collapsed}>
         <div className="logo"/>
         <Menu theme="dark" mode="inline"  selectedKeys={[location.pathname]}>
            <Menu.Item key="/home" icon={<HomeOutlined />} >
            <Link to="/home">
            Home
          </Link>
            </Menu.Item>
            <Menu.Item key="/list" icon={<VideoCameraOutlined />}>
            <Link to="/list">
            Get Words
          </Link>
            
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/test">
            Test
          </Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            <Link to="/creategrammer/0">
            Create Grammer
          </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/listgrammer">
            List  Grammer
          </Link>
            </Menu.Item>
            
          </Menu>
      </Sider>
</React.StrictMode>

  );
}

export default WordSider;
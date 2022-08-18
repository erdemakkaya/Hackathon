import React from "react";
import './index.less';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
const { Header } = Layout;

function WordHeader({toggle, collapsed}) {
  return (
    <>
 

 <Header className="site-layout-background" style={{ background: "#fff", padding: 0 }}>
 {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}

      </Header>
    </>
  );
}

export default WordHeader;
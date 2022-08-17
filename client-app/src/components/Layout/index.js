
import React, { useState } from "react";
import { Layout } from "antd";
import WordSider from "../Sider";
import WordHeader from "../Header";

import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom';


const { Content, Footer } = Layout;
function WordLayout() {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => {
        setCollapsed((prevCollapsed)=>{
            return !prevCollapsed;
        });
      };
  return (
    <>
      <Router>
      <Layout style={{ minHeight: "100vh" }}>

          <WordSider collapsed={collapsed}/>
          <Layout className="site-layout">
            <WordHeader toggle={toggle} collapsed={collapsed}/>

        

            <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
       

          </Content>
          <Footer style={{ textAlign: "center" }}>
            Word ©2022
          </Footer>
          </Layout>
      </Layout>
      </Router>  
    </>
  );
}

export default WordLayout;
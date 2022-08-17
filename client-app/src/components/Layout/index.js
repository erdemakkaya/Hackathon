
import React, { useState } from "react";
import { Layout } from "antd";
import WordSider from "../Sider";
import WordHeader from "../Header";
import Home from "../Home/Home";
import List from "../List/List";
import WordCardFetch from "../WordCard/WordCardFetch";
import Profile from "../Profile/profilePage"
import GrammerCreate from "../../features/Grammer/GrammerCreate";
import GrammerList from "../../features/Grammer/GrammerList";

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
           <Routes>
           <Route  path="/home" element = {<Home />} />
           <Route  path="/list" element = {<List />} />
           <Route  path="/test" element = {<WordCardFetch />} />
           <Route  path="/creategrammer/:id" element = {<GrammerCreate />} />
           <Route  path="/listgrammer" element = {<GrammerList />} />
           <Route  path="/profilePage/:id" element = {<Profile />} />

                      </Routes>  

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
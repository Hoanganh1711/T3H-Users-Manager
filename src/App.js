import 'antd/dist/antd.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Users from './components/Users';
const { Header, Content, Footer} = Layout;

const App = () => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

              <Routes>
                <Route path="/Users" element={<Users />} />
              </Routes>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Metaway Hoding ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
import 'antd/dist/antd.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
const { Header, Content, Footer } = Layout;

const Manager = () => {
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Metaway Hoding ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Manager
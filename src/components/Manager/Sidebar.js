/* eslint-disable jsx-a11y/alt-text */
import {
    TeamOutlined,
    HomeOutlined,
    OrderedListOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Layout, Menu } from 'antd';
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

// components
// import FormList from './FormList';
// import User from './User';
// import SubMenu from 'antd/lib/menu/SubMenu';


const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const items = [
        {
            key: "Home",
            icon: <HomeOutlined />,
            title: "Home",
            link: "#"
        },
        {
            key: "Users",
            icon: <TeamOutlined />,
            title: "Users",
            link: "./UserList"
        },
        {
            key: "TodoList",
            icon: <OrderedListOutlined />,
            title: "Todo List",
            link: "./TodoList"
        },
        // {
        //     key: "UserInfo",
        //     icon: <GlobalOutlined />,
        //     title: "Tin tức",
        //     link: "./ShowNews"
        // },
    ];

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
                    {items.map((item) =>
                        (
                            <Menu.Item key={item.key}>
                                <NavLink className="d-flex align-items-center" to={item.link}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar
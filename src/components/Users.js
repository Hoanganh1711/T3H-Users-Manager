/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { List } from 'antd';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import {
    setFirstName,
    setLastName,
    setEmail,
    setAvatar,
} from ".././features/counter/counterSlice";
import UserInfo from './UserInfo';

function Users() {

    const dispatch = useDispatch();

    const [users, setUsers] = useState([])

    const usersAPI = async () => {
        const url  = `https://reqres.in/api/users?page=1`
        const response = await fetch(url)
        const data = await response.json()
        const usersData = data.data
        console.log(usersData);
        setUsers(usersData)
    }

    useEffect(() => {
        usersAPI()
    }, [])

    // const [firstName, setFisrtName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [avatar, setAvatar] = useState('')

    
    // const handleClickShowInfo = (index) => {
    //     const newUsersArray = [...users]
    //     setFisrtName(newUsersArray[index].first_name)
    //     setLastName(newUsersArray[index].last_name)
    //     setEmail(newUsersArray[index].email)
    //     setAvatar(newUsersArray[index].avatar) 
    // }
    
    const handleOnClick= (users,index) => {
        dispatch(setFirstName(users[index].first_name))
        dispatch(setLastName(users[index].last_name))
        dispatch(setEmail(users[index].email))
        dispatch(setAvatar(users[index].avatar))
    } 


  return (
    <Row style={{justifyContent: 'space-between'}}>
        <Col span={7}>
            <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={(user, index) => (
                <List.Item >
                    <List.Item.Meta 
                    id={user.id}
                    avatar={<Avatar src={user.avatar} />}
                    title={<a href="#">{user.first_name} {user.last_name}</a>}
                    onClick={() => handleOnClick(users, index)}
                    />
                </List.Item>
                )}
            />
        </Col>
        <Col span={15}>
            <UserInfo />
        </Col>
    </Row>
  )
}

export default Users
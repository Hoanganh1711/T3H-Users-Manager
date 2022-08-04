/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Descriptions } from 'antd';
import { useSelector } from "react-redux";
import {
  selectFirstName,
  selectLastName,
  selectEmail,
  selectAvatar
} from "../../features/counter/counterSlice";

const UserInfo = () => {

  const firstname = useSelector(selectFirstName);
  const lastname = useSelector(selectLastName);
  const email = useSelector(selectEmail);
  const avatar = useSelector(selectAvatar);


  return (
    <div style={{backgroundColor: "#fff", padding: 15, borderRadius: 10}}>
        <Descriptions>
          <Descriptions.Item><img src={avatar}></img></Descriptions.Item>
          <Descriptions.Item label="First Name">{firstname}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{lastname}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default UserInfo
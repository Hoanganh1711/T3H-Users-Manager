import 'antd/dist/antd.css';
import './App.css';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const App = () => {
  return (
    <div className='App'>
      <Outlet/>
    </div>
  );
};

export default App;
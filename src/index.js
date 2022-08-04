import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
import SignIn from './components/HomePage.js/SignIn';
import SignUp from './components/HomePage.js/SignUp';
import Manager from './components/Manager/Manager';
import UserList from './components/Manager/UserList';
import UserInfo from './components/Manager/UserInfo'
import TodoList from './components/Manager/TodoList';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(

  // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>} />
                </Route>
                <Route path='/Manager' element={<Manager/>}>
                    <Route path='/Manager/UserList' element={<UserList/>} />
                    <Route path='/Manager/UserInfo' element={<UserInfo/>} />
                    <Route path='/Manager/TodoList' element={<TodoList/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

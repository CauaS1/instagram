import React, { useEffect, useState } from 'react';
import api from './services/api';

import Aside from './components/AsideBar/index';
import Main from './components/Main/index';

import './App.css'

export default function App() {
  const [users, setUsers] = useState({});

  // useEffect(() => {
  //   api.get("users").then(response => {
  //     setUsers(response.data);
  //   }, [users ]);

  //   console.log(users);
  // });

  
  // useEffect(() => {
  //   async function loadUser() {
  //     const response = await api.get("users");

  //     setUsers(response.data);
  //   }
  //   loadUser();
  // }, [users]);

  // var allUsers = {...users};

  // { allUsers.map(user => {
  //   return <li> { user.name } </li>
  // })  }

  return (
    <div className="container">
      <Aside />
      <Main />
    </div>
  );
}


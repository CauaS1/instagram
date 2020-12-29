import React, { useEffect, useState } from 'react';

import Aside from '../AsideBar/index';
import Header from '../Header/index';
import Modal from '../Modal/index';

import Heart from '../../icon/heart.svg';

import api from '../../services/api';

import './index.css';


export default function Main() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('users');

      setUsers(response.data);
    }
    loadUser();
  });

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  } 

  return (
    <div className="main-container">
      <Aside />
      <Modal isEnable={modal} />

      <div className="content-container">
        <Header title="Feed" />
        <div className="post-list">
          {users.map(user => {
            return (
              <div className="post" key={user.index} onClick={handleOpenModal}>
                <img src={user.post.image} alt="" />

                <div className="informations">
                  <div className="main-info">
                    <img src={user.photo} alt="" />
                    <div>
                      <p> {user.name} </p>
                      <span> {user.post_info.hour} hours ago</span>
                    </div>
                  </div>

                  <div className="likes">
                    <p> {user.post_info.likes} </p>
                    <a href="">
                      <img src={Heart} alt="heart icon" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button onClick={handleCloseModal} >Close</button>
    </div>
  );
}


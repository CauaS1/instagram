import React, { useEffect, useState } from 'react';

import Aside from '../AsideBar/index';
import Header from '../Header/index';
import Modal from '../Modal/index';

// import Heart from '../../icon/heart.svg';
import { FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import './index.css';


export default function Main() {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [modal, setModal] = useState(false);

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

  function takeData(user) {
    const userInfo = user //undefined, probably because the first value returns undefined
    setUserInfo(userInfo);
  }

  const like = (id) => {
    console.log(userInfo)
    // setUsers(
    //   users.map((user) => {
    //     if(user.id == id) {
    //       return { ...user, liked: !user.liked };
    //     }
    //     return user;
    //   })
    // );

    // setUsers(userInfo.liked);
  };

  //Create a new NOTION to do some annotations
  return (
    <div className="main-container">
      <Aside />
      <Modal isEnable={modal} functionToClose={handleCloseModal} userInfo={userInfo} isLiked={like} />

      <div className="content-container">
        <Header title="Feed" />
        <div className="post-list">
          {users.map(user => {
            return (
              <div className="post" key={user.id} onClick={() => takeData(user)} >
                <div className="img-container" onClick={handleOpenModal}>
                  <img src={user.post.image} alt="post img" />
                </div>

                <div className="informations">
                  <div className="main-info"  >
                    <img src={user.photo} alt="" />
                    <div>
                      <p> {user.name} </p>
                      <span> {user.post_info.hour} hours ago</span>
                    </div>
                  </div>

                  <div className="likes">
                    <p style={{ color: user.liked ? '#f50057' : '#caced1', transition: '.3s' }} > {user.post_info.likes} </p>
                    <div onClick={() => like(user.id)}>
                      <FaRegHeart size={17}
                        style={{ color: user.liked ? '#f50057' : '#caced1' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}


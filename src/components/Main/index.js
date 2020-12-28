import React, { useEffect, useState } from 'react';

import Header from '../Header/index';
import Heart from '../../icon/heart.svg';

import api from '../../services/api';

import './index.css';

export default function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('users');

      setUsers(response.data);
    }
    loadUser();
  })

  return (
    <div>
      <Header title="Feed" />

      <div className="post-list">

        {users.map(user => {
          return (
            <div className="post" key={user.index}>
              <img src={user.post.image} alt="" />

              <div className="informations">
                <div className="main-info">
                  <img src={user.photo} alt="" />
                  <div>
                    <p> { user.name } </p>
                    <span> { user.post_info.hour } hours ago</span>
                  </div>
                </div>

                <div className="likes">
                  <p> { user.post_info.likes } </p>
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
  );
}


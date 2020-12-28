import React from 'react';

import Header from '../Header/index';
import Heart from '../../icon/heart.svg';

import './index.css';

export default function Main() {
  return (
    <div>
      <Header title="Feed" />

      <div className="post-list">

        <div className="post">
          <img src="https://images.unsplash.com/flagged/photo-1555993072-c4d2073b15f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80" alt="" />

          <div className="informations">
            <div className="main-info">
              <img src="https://images.unsplash.com/photo-1606851179972-49253626d5a6?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
              <div>
                <p>cauas1</p>
                <span>3 hours ago</span>
              </div>
            </div>

            <div className="likes">
              <p>165</p>
              <a href="">
                <img src={Heart} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


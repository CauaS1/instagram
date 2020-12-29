import React, { useState } from 'react';
import './index.css';

import Heart from '../../icon/heart.svg';

export default function Modal(props) {
  const [visibility, setVisibility] = useState(props.isEnable);
  console.log(props.isEnable)
  return (
    <>
      {visibility ? (
        <div className="modal-container">
          <div className="modal">
            <img src="https://images.unsplash.com/photo-1609082011559-6cfda1bfa60b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

            <div className="informations">
              <div className="basic-info">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div>
                  <h3>Madara matador</h3>
                  <p>at Konoha Village </p>
                </div>
              </div>

              <div className="secondary-info">
                <p>A photo taked at Mountain Everest, near the river <br />
            and some other things facebook indian
            </p>
              </div>

              <div className="reactions">
                <p>4185</p>
                <a href="">
                  <img src={Heart} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : ( 
        null
      )}
    </>
  );
}
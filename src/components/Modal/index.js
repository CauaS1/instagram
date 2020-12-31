import React, { useState, useEffect } from 'react';
import './index.css';

import { FaRegHeart } from 'react-icons/fa';

export default function Modal(props) {
  const [users, setUsers] = useState([]);
  const [visibility, setVisibility] = useState(props.isEnable);

  useEffect(() => {
    setVisibility(props.isEnable)
  });

  return (
    <>
      {visibility ? (
        <div className="modal-container" onClick={props.functionToClose} >
          <div className="modal">
            <img src={props.userInfo.post.image} alt="" />

            <div className="informations">
              <div className="basic-info">
                <img src={props.userInfo.photo} alt="" />
                <div>
                  <h3>{props.userInfo.name}</h3>
                  <p>at Konoha Village </p>
                </div>
              </div>

              <div className="secondary-info">
                <p> {props.userInfo.post.title} </p>
              </div>

              <div className="reactions">
                <p style={{ color: props.isLiked.like  ? '#f50057' : '#caced1' }} > {props.userInfo.post_info.likes} </p>
                <div>
                  <FaRegHeart size={17}
                    style={{ color: props.isLiked.like ? '#f50057' : '#caced1' }}
                  />
                </div>
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
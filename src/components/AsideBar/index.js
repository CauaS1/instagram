import React from 'react';

import FontLogo from '../../icon/instafont-logo.png';
import Insta from '../../icon/insta-logo.svg';
import Home from '../../icon/home.svg';
import Search from '../../icon/loupe.svg';
import Notifications from '../../icon/email.svg';
import Message from '../../icon/messenger.svg';

import Config from '../../icon/gear.svg';
import User from '../../icon/user.svg';


import './index.css';

export default function Header() {
  return (
    <aside>
      <div className="top-side">
        <img src={Insta} alt="" className="insta" />
        <img src={FontLogo} alt="" />
      </div>

      <div className="activity">
        <a href="#">
          <img src={Home} alt="" className="insta"/>
          Feed
        </a>
        <a href="#">
          <img src={Search} alt="" className="insta"/>
          Explore
        </a>
        {/* <a href="#">
          <img src={Insta} alt="" className="insta"/>
          Top Posts
        </a> */}
        <a href="#">
          <img src={Message} alt="" className="insta"/>
          Notifications
        </a>
        <a href="#">
          <img src={Notifications} alt="" className="insta"/>
          Direct
        </a>
      </div>

      <div className="bottom-side">
        <a href="">
          <img src={Config} alt="" className="insta"/>
        </a>

        <a href="">
          <img src={User} alt="" className="insta"/>
        </a>
      </div>
    </aside>
  );
}

// #d4d8db


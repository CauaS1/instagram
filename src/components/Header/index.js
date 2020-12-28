import React, { useState, useEffect } from 'react';

import Bell from '../../icon/bell.svg';
import Badge from '@material-ui/core/Badge';

import './index.css';

export default function Header({ title }) {
  const [invisible, setInvisible] = useState(false)


  function handleDisableBadge() {
    setInvisible(true);
  }

  return (
    <header>
      <h1> {title} </h1>

      <div className="right-side">
        <a href="#" onClick={handleDisableBadge}>
          <Badge color="secondary" variant="dot" invisible={invisible} >
            <img src={Bell} alt="logo" />
          </Badge>
        </a>

        <input type="text" placeholder="Search" />

        <div className="profile">
          <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80" alt="" />

          <p>CauaS1</p>
        </div>
      </div>
    </header>
  )
}
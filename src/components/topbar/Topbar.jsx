import { Chat, Notifications, Search } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo">SNS app</p>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'></Search>
          <input
            type="text"
            className="searchInput"
            placeholder='探し物は何ですか？'
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItems">
          <div className="topbarIconItem">
            <Chat></Chat>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications></Notifications>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
      </div>
    </div>
  );
}

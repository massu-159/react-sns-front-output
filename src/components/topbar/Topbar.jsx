import { Chat, Notifications, Search } from '@mui/icons-material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css";
import { AuthContext } from "../../state/AuthContext";

export default function Topbar() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

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
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture
            ? `${PUBLIC_FOLDER}${user.profilePicture}`
            : `${PUBLIC_FOLDER}/person/noIconImage.png`}
            alt="" className='topbarImg' />
        </Link>
      </div>
    </div>
  );
}

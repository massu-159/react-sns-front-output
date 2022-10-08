import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'
import CloseFriend from '../closefriend/CloseFriend';
import "./Sidebar.css";
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li className="sidebarListItem">
              <Home className="sidebarIcon"></Home>
                <span className="sidebarListItemText">ホーム</span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <Search className="sidebarIcon"></Search>
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon"></Notifications>
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon"></MessageRounded>
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"></Bookmark>
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <Link to={"/profile/massu"} style={{ textDecoration: "none", color: "black" }}>
            <li className="sidebarListItem">
              <Person className="sidebarIcon"></Person>
                <span className="sidebarListItemText">プロフィール</span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon"></Settings>
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id}></CloseFriend>
          ))}
        </ul>
      </div>
    </div>
  )
}

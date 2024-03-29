import React from 'react'
import "./Home.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar.tsx'
import TimeLine from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <TimeLine></TimeLine>
        <Rightbar></Rightbar>
      </div>
    </>
  )
}

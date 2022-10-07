import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import React from 'react'
import "./Share.css";

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className='shareProfileImg' />
          <input
            type="text"
            className="shareInput"
            placeholder='今何してる？'
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className='shareIcon' htmlColor='blue'></Image>
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <Gif className='shareIcon' htmlColor='hotpink'></Gif>
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className='shareIcon' htmlColor='green'></Face>
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className='shareIcon' htmlColor='red'></Analytics>
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  )
}
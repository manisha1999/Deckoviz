import './SideBar.css';
import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { IoIosHeartEmpty, IoIosFiling, IoIosSearch, IoMdGift, IoMdChatbubbles } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { TbCirclePercentage } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";

import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className='sidebarcontainer'>
    <div className='sidecontainer'>

        <div className='icons'>
        <div className='icon'><NavLink 
    to="/"
    className={({ isActive }) => (isActive ? 'active-icon-bg' : '')}
  >
    <MdHomeFilled className='homeIcon' />
  </NavLink></div>
        <div className="icon"><NavLink
    to="/aijournal"
    className={({ isActive }) => (isActive ? 'active-icon-bg' : '')}
  >
    <IoIosHeartEmpty className='homeIcon' />
  </NavLink></div>
        <div className="icon"><MdHomeFilled className='homeIcon'/></div>
        <div className="icon"><IoIosSearch className='homeIcon'/></div>
        <div className="icon"><IoMdChatbubbles className='homeIcon'/></div>
        </div>
        <div className='lineside'>
        </div>
        <div className='icons'>
        <div className='icon'><CiDollar className='homeIcon'/></div>
        <div className="icon"><TbCirclePercentage className='homeIcon'/></div>
        <div className="icon"><IoMdGift className='homeIcon'/></div>
        </div>
        <div className="icon"><PiSignOutBold className='homeIcon' style={{color:"red",marginTop:"100px"}}/></div>
  </div>
  </div>
  )
}

export default SideBar
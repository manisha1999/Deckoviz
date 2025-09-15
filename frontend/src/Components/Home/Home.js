import React from 'react'
import './Home.css';
import { HiArrowCircleRight, HiUsers } from "react-icons/hi";
// import { TbMessageCircleFilled } from "react-icons/tb";
import { MdHomeFilled, MdOutlineKeyboardArrowDown } from "react-icons/md";
import {BiSolidNotepad } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { TbCirclePercentage } from "react-icons/tb";

import SideBar from '../SideBar/SideBar';


function Home() {
    return (
        <div className='Home'>
            <div classname='sidebar' style={{ width: "81.92px", height: "888.92px", marginLeft: "29px", marginTop: "36px" }}>
                <SideBar /></div>
            <div className='homecontainer'>
                <div className='search'>
                    <div className='searchbar'><input type="text" />
                        <div><IoIosSearch className='searchicon' /></div>
                    </div>
                    <div className='notifications'>
                        <IoIosNotificationsOutline className='noti' />
                        <CiSettings className='noti' />
                    </div>
                </div>
                <div className='profile'>
                    {/* style={{fontWeight:"600"}}> */}
                    <h1 className="text-white text-xl font-semibold"> Hey Manisha,</h1>
                    <p>What would you like to do?</p>
                </div>

                <div className='contents'>
                    <div id='content'>
                        <HiArrowCircleRight className="arrow" />
                        <HiUsers className='outlineuser' size={2} />
                        <div className='text'>Explore your daily recommendation</div></div>
                    <div id='content'>
                        <HiArrowCircleRight className="arrow" />
                        <FaCommentDots className='outlineuser' />
                        <div className='text'>Prompt your way to your people</div>
                    </div>
                </div>
                <div className='socialhome'>
                    <HiArrowCircleRight className="arrow" />
                    <MdHomeFilled className='outlineuser' />
                    <div className='text'>Go to your social</div>
                </div>
                <div className='line'>
                </div>
                <div className='contents' style={{ marginTop: "30px" }}>
                    <div id='cont'>
                        <HiArrowCircleRight className="arrow" />
                        <HiUsers className='outlineuser' size={2} />
                        <div className='text'>Relationship Dashboard</div>
                    </div>
                    <div id='cont'>
                        <HiArrowCircleRight className="arrow" />
                        <HiUsers className='outlineuser' size={2} />
                        <div className='text'>Question Cards</div>
                    </div>
                    <div id='cont'>
                        <HiArrowCircleRight className="arrow" />
                        <HiUsers className='outlineuser' size={2} />
                        <div className='text'>Relationship Coach</div>
                    </div>
                    <div id='cont'>
                        <HiArrowCircleRight className="arrow" />
                        <HiUsers className='outlineuser' size={2} />
                        <div className='text'>Relationship Pad</div>
                    </div>
                </div>
                <div className='socialhome'>
                    <HiArrowCircleRight className="arrow" />
                    <MdHomeFilled className='outlineuser' />
                    <div className='text'> Your Relationship Home</div>
                </div>
                <div className='seemore'>
                    <button>See more<span><MdOutlineKeyboardArrowDown /></span></button>
                </div>
            </div>


        </div>

    )
}

export default Home


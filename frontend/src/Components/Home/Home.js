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
import SearchBar from '../SearchBar/SearchBar';

import SideBar from '../SideBar/SideBar';


function Home() {
    return (
        <div className='Home'>
            <div classname='sidebar' style={{ width: "81.92px", height: "888.92px", marginLeft: "29px", marginTop: "36px" }}>
                <SideBar /></div>
            <div className='homecontainer'>
                <div style={{marginTop:"40px"}}>
                    <SearchBar />
                </div>
                <div className='profile' >
                    {/* style={{fontWeight:"600"}}> */}
                    <div className="nametext"> Hey Manisha,</div>
                    <div className='nametwotext'>What would you like to do?</div>
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
                    
                    <MdHomeFilled className='outlineuser' />
                    <div className='text socialtext'>Go to your social</div>
                    <HiArrowCircleRight className="arrow socialarrow" />
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
                    <MdHomeFilled className='outlineuser' />
                    <div className='text socialtext'>Go to your social</div>
                    <HiArrowCircleRight className="arrow socialarrow" />
                </div>
                <div className='seemore'>
                    <button>See more<span><MdOutlineKeyboardArrowDown /></span></button>
                </div>
            </div>


        </div>

    )
}

export default Home


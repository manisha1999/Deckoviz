import React from 'react'
import './SearchBar.css'
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

function SearchBar() {
  return (
    <div className='searchFeature'>
        <div className="search-container">
        <IoIosSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="header-right-icons">
        <IoIosNotificationsOutline className="header-icon" />
        <CiSettings className="header-icon" />
        <div className="separator"></div> 
        <img src="" alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  )
}

export default SearchBar
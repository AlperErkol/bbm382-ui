import React from 'react'

import { HiMenuAlt3, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";

import Logo from '../assets/images/logo.png';

const TimelineHeader = () => {
  return (
    <header className="timeline--header h-16 w-full bg-primary-light">
        <nav className="max-w-6xl mx-auto h-full flex justify-between items-center">
            <div className="flex">
              <img className="timeline--header-logo" src={Logo} alt="hacettepe-logo"/>
              <form className="search--area flex">
                  <input className="search-input mr-2" placeholder="Search Anything" type="text" spellCheck={false} />
                  <button type="submit"><HiOutlineSearch size={20}/></button>
              </form>
            </div>
            <div className="nav--links flex">
                <MdOutlineNotificationsNone className="mr-2" size={24}/>
                <HiMenuAlt3 size={24}/>
            </div>
        </nav>
    </header>
  )
}

export default TimelineHeader
import React, {useState} from 'react'

import { HiMenuAlt3, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";

import Logo from '../assets/images/logo.png';

import Sidebar from "./Sidebar";

import {Link} from 'react-router-dom';

const TimelineHeader = () => {

  const [visible, setVisible] = useState(false);

  const openSidebar = _ => {
      setVisible(true);
  };

  const closeSidebar = _ => {
    setVisible(false);
  };



  return (
    <header className="timeline--header h-16 w-full bg-primary-light">
        <nav className="max-w-6xl mx-auto h-full flex justify-between items-center">
            <div className="flex">
              <Link to="/">
                <img className="timeline--header-logo" src={Logo} alt="hacettepe-logo"/>
              </Link>
              <form className="search--area flex">
                  <input className="search-input mr-2" placeholder="Search Anything" type="text" spellCheck={false} />
                  <button type="submit"><HiOutlineSearch size={20}/></button>
              </form>
            </div>
            <div className="nav--links flex">
                <MdOutlineNotificationsNone className="mr-2" size={24}/>
                <HiMenuAlt3 onClick={openSidebar} size={24}/>
            </div>
        </nav>
        <div onClick={closeSidebar} className={visible ? 'overlay active' : 'overlay'}></div>
        <aside className={visible ? 'main--sidebar active' : 'main--sidebar'}>Sidebar</aside>
    </header>
  )
}

export default TimelineHeader
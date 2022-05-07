import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import {FiSettings} from 'react-icons/fi';

const AdminHeader = () => {
  return (
    <header className="h-16 bg-secondary ">
        <nav className='mx-4 flex items-center justify-between'>
            <Link to="/">
                <img className="header--logo" src={Logo} alt="hacettepe-logo" />
            </Link>
            <span className='text-primary-light uppercase font-bold'>
                Superuser
            </span>
            <FiSettings className='text-primary-light' size={24} />
        </nav>
    </header>
  )
}

export default AdminHeader
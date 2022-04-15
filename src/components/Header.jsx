import React from 'react'

import {Link} from 'react-router-dom';

import Logo from '../assets/images/logo.png';


const Header = () => {
  return (
    <header className="h-16 bg-primary-light mb-8">
    <nav className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/">
        <img className="header--logo" src={Logo} alt="hacettepe-logo" />
      </Link>
      <div>
        <Link className="text-secondary font-bold mr-6" to="/timeline">
          Timeline
        </Link>
        <Link className="text-secondary font-bold mr-6" to="/account/signup">
          Sign Up
        </Link>
        <Link className="text-secondary font-bold" to="/account/signin">
          Sign In
        </Link>
      </div>
    </nav>
  </header>
  )
}

export default Header
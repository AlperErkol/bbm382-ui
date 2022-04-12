import React from 'react'

import Logo from '../assets/images/logo.png';

import {Link} from 'react-router-dom';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <section className="hero--section w-full h-full">
        <header className="flex justify-between items-center h-16 bg-tertiary">
          <img className="header--logo" src={Logo} alt="hacettepe-logo" />
          <div>
            <Link className="text-primary font-bold mr-4" to="/account/signup">
              Sign Up
            </Link>
            <Link className="text-primary font-bold" to="/account/signin">
              Sign In
            </Link>
          </div>
        </header>
        <div className="container">
          <div className="text--section grid grid-cols-2 gap-2 mt-2">
            <div className="left bg-primary" >
              <span>LinkedHU_CENG</span>
              <h1>Next Generation Social Media App.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto, accusamus deleniti unde dolorum soluta eveniet, blanditiis reiciendis rerum nisi, qui optio cupiditate minus facilis sapiente quidem consequuntur? Voluptates, sunt.</p>
            </div>
            <div className="right bg-tertiary">
            </div>
          </div>

          <div className="why-us--section">
            <div className="why-us--item"></div>
            <div className="why-us--item"></div>
            <div className="why-us--item"></div>
            <div className="why-us--item"></div>
            <div className="why-us--item"></div>
            <div className="why-us--item"></div>
          </div>

          <div className="slider--section">
            <h2 className="text-3xl uppercase text-center font-extrabold m-0">testimonials</h2>
            <div className="testimonials">
              <Slider/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
import React from 'react'



import Slider from '../components/Slider';
import Button from '../components/Button';

import Hero from '../assets/images/hero.png';
import Header from '../components/Header';

import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero--section w-full h-full">
        <Header/>
        <div className="container">
          <div className="text--section grid grid-cols-2 gap-2 mt-2">
            <div className="left flex items-center" >
              <div className="flex flex-col">
                <span className="app-name text-tertiary">LinkedHU_CENG</span>
                <h1 className="app-type">Next Generation Social Media App</h1>
                <p className="text-sm font-bold mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto, accusamus deleniti unde dolorum soluta eveniet, blanditiis reiciendis rerum nisi, qui optio cupiditate minus facilis sapiente quidem consequuntur? Voluptates, sunt.</p>
                <Link to="/account/signup">
                  <Button text="Get Started"/>
                </Link>
              </div>
            </div>
            <div className="right">
              <img className="hero--girl" src={Hero} alt="home--hero" />
            </div>
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
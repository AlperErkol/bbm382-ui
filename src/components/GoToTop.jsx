import React from 'react'
import { BiUpArrow } from "react-icons/bi";

import {Link} from 'react-router-dom';


const GoToTop = () => {

  const toTop = _=> {
    window.scrollTo(0, 0);
  }
  return (
    <div onClick={toTop} className="asdasd fixed right-4 bottom-4 bg-secondary w-10 h-10 flex justify-center items-center cursor-pointer">
       
          <BiUpArrow className="text-primary-light " size={24}/>
        
    </div>
  )
}

export default GoToTop
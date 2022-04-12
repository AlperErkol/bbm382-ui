import React from 'react'
import { BiUpArrow } from "react-icons/bi";


const GoToTop = () => {
  return (
    <div className="fixed right-4 bottom-4 bg-secondary w-10 h-10 flex justify-center items-center">
        <BiUpArrow className="text-primary-light" size={24}/>
    </div>
  )
}

export default GoToTop
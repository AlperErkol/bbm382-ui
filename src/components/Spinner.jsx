import React from 'react'
import { ImSpinner8 } from "react-icons/im";



const Spinner = () => {
  return (
    <div className='spinner flex items-center justify-center my-4'>
        <ImSpinner8 className='text-secondary' size={24}/>
    </div>
  )
}

export default Spinner
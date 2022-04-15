import React from 'react'

const Alert = ({text}) => {
  return (
    <span className="text-xs font-bold block w-full text-errorText bg-errorArea p-2 rounded-md mb-2">{text}</span>
  )
}

export default Alert
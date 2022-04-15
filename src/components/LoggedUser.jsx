import React from 'react'

const LoggedUser = ({data}) => {
  return (
    <div>
        <div className="w-16 h-16 rounded-full bg-secondary mb-4"></div>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.userId}</p>
    </div>
  )
}

export default LoggedUser
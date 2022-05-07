import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

const Admin = () => {
  return (
    <div className='admin--page'>
      <AdminHeader/>
      <AdminSidebar/>
    </div>
  )
}

export default Admin
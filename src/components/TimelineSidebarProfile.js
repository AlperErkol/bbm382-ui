import React from 'react'

const TimelineSidebarProfile = () => {
  return (
    <div className='timeline--sidebar-profile'>
        <div className="flex me--section-header pb-2 mb-2">
            <div className="profile-photo mr-2"></div>
            <div className='flex flex-col'>
                <div>
                    <span className='mr-2'>Hi, Alper.</span>
                    <span className='user-type'>admin</span>
                </div>
                <span>Member Since : 28 Apr, 2022</span>
            </div>
        </div>
        <div className="flex flex-col">
            <span>Posts : 0</span>
            <span>Events : 0</span>
            <span>Comments : 0</span>
        </div>
    </div>
  )
}

export default TimelineSidebarProfile
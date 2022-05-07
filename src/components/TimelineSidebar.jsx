import React, {useState, useEffect} from 'react'

import UserService from '../services/UserService';
import TimelineSidebarProfile from './TimelineSidebarProfile';

const TimelineSidebar = () => {


    
    const [loggedUser, setLoggedUser] = useState();
    const [loggedUserId, setLoggedUserId] = useState();


    useEffect(() => {
        if(localStorage.getItem("loggedUser")){
            const userId = localStorage.getItem("loggedUser")
            setLoggedUserId(userId);
            setLoggedUser(true);
            UserService.findByUserId(userId)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }else{
            setLoggedUser(false);
        }
        
    }, [])
    
    
  return (
    <aside className="timeline--sidebar">
        <div className="timeline--sidebar-container bg-primary-light w-full h-72">
            {loggedUser && loggedUser ? <TimelineSidebarProfile/> : <p className="text-center font-bold">You must log in to post.</p>}
        </div>
    </aside>
  )
}

export default TimelineSidebar
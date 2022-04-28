import React,{useState} from 'react'

const Sidebar = () => {

    const [visible, setVisible] = useState(false);


    const openSidebar = _ => {
        setVisible(!visible)
    }
    



  return (
    <aside className={visible ? 'main--sidebar active' : 'main--sidebar'}>Sidebar</aside>
  ) 
}

export default Sidebar
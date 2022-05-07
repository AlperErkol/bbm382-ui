import React from 'react'

import { Tabs } from 'antd';
import AllUsers from './AllUsers';
import PendingRequests from './PendingRequests';

const AdminSidebar = () => {


  const { TabPane } = Tabs;



  return (
    <div className='admin--menu'>
      <Tabs defaultActiveKey="0" tabPosition={"left"}>
          <TabPane tab={`Pending Requests`} key={"0"} >
            <PendingRequests/>
          </TabPane>
          <TabPane tab={"Users"} key={"1"} >
              <AllUsers/>
          </TabPane>
          <TabPane tab={"Posts & Events"} key={"2"} >
              <AllUsers/>
          </TabPane>
      </Tabs>
    </div>
  )
}

export default AdminSidebar
import React from 'react'

import { Tabs } from 'antd';
import AllUsers from './AllUsers';
import PendingRequests from './PendingRequests';

const { TabPane } = Tabs;

const AdminSidebar = () => {
  return (
    <div className='admin--menu'>
      <div className="admin--menu--header bg-secondary text-primary-light font-bold text-sm h-12 flex items-center justify-center">
        <span>SUPERUSER</span>
      </div>
      <Tabs defaultActiveKey="0" tabPosition={"left"}>
          <TabPane tab={`Pending Requests`} key={"0"} >
            <PendingRequests/>
          </TabPane>
          <TabPane tab={"All users"} key={"1"} >
              <AllUsers/>
          </TabPane>
      </Tabs>
    </div>
  )
}

export default AdminSidebar
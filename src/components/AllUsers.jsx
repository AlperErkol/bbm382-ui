import React, {useState, useEffect} from 'react'
import UserService from '../services/UserService';
import { Table, Space } from 'antd';
import Spinner from './Spinner';
import { RiDeleteBin6Line } from "react-icons/ri";



const AllUsers = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteUser = (data) => {
    let userId = data.userId;
    UserService.declinePendingRequest(userId)
    .then(response => {
      if(response){
        getAllUsers();
      }
    })
    .catch(error => console.error(error));
  };
  

  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Surname',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      key: 'userStatus',
      dataIndex: 'userStatus',
    },
    {
      title: 'User Type',
      key: 'userType',
      dataIndex : 'userType',
  
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <RiDeleteBin6Line onClick={()=>deleteUser(record)}  size={18}/>
        </Space>
      ),
    },
  ];


  const getAllUsers = () => {
    setLoading(true);
    UserService.getAllUsers()
    .then(response => {
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });

  };

  useEffect(() => {
    getAllUsers();
  }, [])
  
  return (
    <>
      {loading && <Spinner/>}
      {loading == false && data && <Table columns={columns} dataSource={data} />}
    </>
  )
}

export default AllUsers;
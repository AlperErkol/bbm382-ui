import React, {useState, useEffect} from 'react'
import UserService from '../services/UserService';
import { Table, Space } from 'antd';
import Spinner from './Spinner';

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
        <a>Decline</a>
        <a>Accept</a>
      </Space>
    ),
  },
];


const PendingRequests = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);



  const getAllPendingRequests = () => {
    setLoading(true);
    UserService.getAllPendingRequests()
    .then(response =>{
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    })
    .catch(error =>{
      console.log(error);
      setLoading(false);
    });
  };


  useEffect(() => {
    getAllPendingRequests();
  }, [])
  





  return (
    <>
      {loading && <Spinner/>}
      {data && <Table columns={columns} dataSource={data} />}
    </>
  )
}

export default PendingRequests
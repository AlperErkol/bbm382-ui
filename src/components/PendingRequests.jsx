import React, {useState, useEffect} from 'react'
import UserService from '../services/UserService';
import { Table, Space } from 'antd';
import Spinner from './Spinner';
import { ImCross, ImCheckmark} from "react-icons/im";

const PendingRequests = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);



  const getAllPendingRequests = () => {
    setLoading(true);
    UserService.getAllPendingRequests()
    .then(response =>{
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

  const acceptRequest = (data) =>{
    let userId = data.userId;
    UserService.acceptPendingReques(userId)
    .then(response => {
      if(response){
        getAllPendingRequests();
      }
    })
    .catch(error => console.error(error));
    
  };
  
  const declineRequest = (data) =>{
    let userId = data.userId;
    UserService.declinePendingRequest(userId).then(response => {
      if(response){
        getAllPendingRequests();
      }
    }).catch(error => console.log(error));
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
          <ImCheckmark onClick={()=>acceptRequest(record)} size={18}/>
          <ImCross onClick={()=>declineRequest(record)}/>
        </Space>
      ),
    },
  ];


  return (
    <>
      {loading && <Spinner/>}
      {loading == false && data && <Table columns={columns} dataSource={data} />}
    </>
  )
}

export default PendingRequests
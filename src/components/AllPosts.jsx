import React, {useState, useEffect} from 'react'
import { Table, Space } from 'antd';
import Spinner from './Spinner';
import { RiDeleteBin6Line } from "react-icons/ri";
import PostService from '../services/PostService';



const AllPosts = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deletePost = (data) => {      
    PostService.deletePost(data.postId)
    .then(response => {
      if(response){
        getAllPosts();
      }
    })
    .catch(error => console.error(error));
  };
  

  const columns = [
    {
      title: 'Post Id',
      dataIndex: 'postId',
      key: 'postId',
      render: text => <a href={`http://localhost:3000/post/${text}`}>{text}</a>,
    },
    {
      title: 'Post Type',
      dataIndex: 'postType',
      key: 'postType',
    },
    {
      title: 'Post Owner Id',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Post Content',
      key: 'postContent',
      dataIndex: 'postContent',
    },
    {
      title: 'Creation Date',
      key: 'creationDate',
      dataIndex : 'creationDate',
  
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <RiDeleteBin6Line onClick={()=>deletePost(record)}  size={18}/>
        </Space>
      ),
    },
  ];


  const getAllPosts = () => {
    setLoading(true);
    PostService.getAllPosts()
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
    getAllPosts();
  }, [])
  
  return (
    <>
      {loading && <Spinner/>}
      {loading == false && data && <Table columns={columns} dataSource={data} />}
    </>
  )
}

export default AllPosts;
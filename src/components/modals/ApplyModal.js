import React, { useState, useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

import PostService from '../../services/PostService';
import UploadFile from '../UploadFile';

const ApplyModal = ({callback,isVisible,isHide}) => {


    const isModalVisible = isVisible;

    const [form] = Form.useForm();



    const onFinish = (values) => {
        
        // PostService.createPost(values)
        // .then(response => {
            
        //     isHide();
        //     callback();
        // })
        // .catch(error => {
        //     console.log(error);
        //     isHide();
        //     callback();
        // });
        
    };
    
    const handleCancel = () => {
        isHide();
    };

    return (
        <>
        <Modal 
            title="&#127980; Apply Form"
            okText="Apply"
            visible={isModalVisible}
            onOk={() => {
            form
                .validateFields()
                .then((values) => {
                    onFinish(values);
                })
                .catch((info) => {
                    console.log('Validate Failed:', info);
                });
            }}
            onCancel={handleCancel}>
            <Form
                form={form}
                name="post"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    className="font-bold"
                    name="postContent"
                    label="Content"
                    rules={[{min:20, message: 'Content must be at least 20 characters.'},{ required: true, message: 'Please input content.' }]}
                >
                    <Input.TextArea className="bg-tertiary mb-4" spellCheck={false} placeholder="What's happening?"  showCount maxLength={160} />
                </Form.Item>
            </Form>
            <UploadFile apply={true}/>
        </Modal>
        </>
    )
}

export default ApplyModal;
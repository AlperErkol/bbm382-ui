import React, { useState, useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

import PostService from '../../services/PostService';

const EditTextModal = ({callback, data,isVisible,isHide}) => {


    const isModalVisible = isVisible;

    const [form] = Form.useForm();

    const onFinish = (values) => {
        
        data.postContent = values.postContent;
        PostService.updatePost(data)
        .then(response => {
            isHide();
            callback();
        })
        .catch(error => {
            console.log(error);
            isHide();
            callback();
        });
        
    };
    
    const handleCancel = () => {
        console.log('handle cancel');
        isHide();
    };

    return (
        <>
        <Modal 
            title="&#127980; Edit a Text Post"
            okText="Save"
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
                    <Input.TextArea rows="10" className="bg-tertiary" spellCheck={false} placeholder="What's happening?"  showCount maxLength={160} defaultValue={data.postContent}  />
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}

export default EditTextModal
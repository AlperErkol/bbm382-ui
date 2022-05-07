import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Radio, DatePicker} from 'antd';

import PostService from '../../services/PostService';
import UploadFile from '../UploadFile';

const EventModal = ({callback,isVisible,isHide}) => {


    const isModalVisible = isVisible;

    const [form] = Form.useForm();



    const onFinish = (values) => {
        values.postType = "TEXT";
        PostService.createPost(values)
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
        isHide();
    };

    return (
        <>
        <Modal 
            title="&#127980; Create an Event"
            okText="Schedule"
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
                <Form.Item label="Event Title" required tooltip="This is a required field">
                    <Input placeholder="Event Title" />
                </Form.Item>

                <Form.Item
                    className="font-bold"
                    name="postContent"
                    label="Event Description"
                    rules={[{min:20, message: 'Content must be at least 20 characters.'},{ required: true, message: 'Please input content.' }]}
                >
                    <Input.TextArea rows="4" spellCheck={false} placeholder="Event Description" showCount maxLength={80} />
                </Form.Item>
                <Form.Item name="radio-group" label="Event Type">
                    <Radio.Group>
                        <Radio value="online">Online</Radio>
                        <Radio value="face-to-face">F2F</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Event Link" required tooltip="This is a required field">
                    <Input placeholder="Event link if it is online" />
                </Form.Item>
                <Form.Item label="Event Date">
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                </Form.Item>
                <UploadFile/>
            </Form>
        </Modal>
        </>
    )
}

export default EventModal;
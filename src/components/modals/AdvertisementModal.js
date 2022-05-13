import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Radio, DatePicker, Space } from "antd";
import moment from 'moment';

import PostService from "../../services/PostService";
import UploadFile from "../UploadFile";

const AdvertisementModal = ({ callback, isVisible, isHide }) => {
  const isModalVisible = isVisible;

  const [form] = Form.useForm();

  const [advertisementType, setAdvertisementType] = useState("");

  const onFinish = (values) => {
    values.postEventEndDate = values.postEventEndDate._d;
    values.canApply = true;
    PostService.createPost(values)
    .then(response => {
        console.log(response.data);
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

  const onChange = (e) => {
    setAdvertisementType(e.target.value);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  return (
    <>
      <Modal
        title="Create an Advertisement"
        okText="Schedule"
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onFinish(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form form={form} name="post" onFinish={onFinish} layout="vertical">
          <Form.Item name="postTitle" label="Advertisement Title" required>
            <Input placeholder="Advertisement Title" />
          </Form.Item>

          <Form.Item name="postType" label="Advertisement Type" required>
            <Radio.Group onChange={onChange}>
              <Space direction="vertical">
                <Radio value="job">Job Advertisement</Radio>
                <Radio value="internship">Internship Advertisement</Radio>
                <Radio value="scholarship">Scholarship Advertisement</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          {(advertisementType === "job" ||
            advertisementType === "internship") && (
            <Form.Item
              name="companyName"
              label="Company Name"
              rules={[
                { min: 3, message: "Content must be at least 3 characters." },
                { required: true, message: "Please input company name." },
              ]}
            >
              <Input placeholder="Company Name" />
            </Form.Item>
          )}

          <Form.Item
            className="font-bold"
            name="postContent"
            label="Advertisement Description"
            rules={[
              { min: 20, message: "Content must be at least 20 characters." },
              { required: true, message: "Please input content." },
            ]}
          >
            <Input.TextArea
              rows="4"
              spellCheck={false}
              placeholder="Advertisement Description"
              showCount
              maxLength={80}
            />
          </Form.Item>

          <Form.Item
            name="postEventEndDate"
            label="Advertisement Expire Date"
            required
          >
            <DatePicker disabledDate={disabledDate} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdvertisementModal;

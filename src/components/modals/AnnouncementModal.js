import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Radio, DatePicker, Space } from "antd";

import PostService from "../../services/PostService";
import UploadFile from "../UploadFile";

const AnnouncementModal = ({ callback, isVisible, isHide }) => {
  const isModalVisible = isVisible;

  const [form] = Form.useForm();

  const [postType, setPostType] = useState("");

  const onChange = (e) => {
    setPostType(e.target.value);
  };

  const onFinish = (values) => {

    if(values.canApply === null){
      values.canApply = false;
    }

    PostService.createPost(values)
      .then((response) => {
        console.log(response.data);
        isHide();
        callback();
      })
      .catch((error) => {
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
        title="Create an Announcement"
        okText="Post"
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
          <Form.Item name="postTitle" label="Announcement Title" required>
            <Input placeholder="Announcement Title" />
          </Form.Item>

          <Form.Item name="postType" label="Announcement Type" required>
            <Radio.Group onChange={onChange}>
              <Space direction="vertical">
                <Radio value="announcement">Standart Announcement</Radio>
                <Radio value="news">News</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          {postType === "announcement" && (
            <Form.Item name="canApply" label="Appliable" required>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Space>
              </Radio.Group>
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
              className="mb-4"
              rows="4"
              spellCheck={false}
              placeholder="Advertisement Description"
              showCount
              maxLength={80}
            />
          </Form.Item>

          <UploadFile />
        </Form>
      </Modal>
    </>
  );
};

export default AnnouncementModal;

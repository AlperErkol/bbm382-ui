import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Upload } from "antd";

import UserService from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import Alert from "./Alert";

const ChangePassword = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const onFinish = (values) => {
    values.userId = data.userId;
    
    setLoading(true);
    setErrorAlert(false);
    UserService.updatePassword(values)
      .then((response) => {
        console.log(response.data);
        if (response.data === "") {
          setErrorAlert(true);
        } else {
          toast.success("🦄 Success, saved...!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signup-tab flex items-center justify-center px-12">
      {errorAlert && (
        <div>
          <Alert text="An error occured. Check your information!" />
        </div>
      )}

      <Form
        className="edit-profile-form"
        layout="vertical"
        size="large"
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col">
          <Form.Item
            className="flex-1 form-row-element"
            label="Old Password"
            name="oldPassword"
            rules={[
              { min: 8, message: "Old Password must be minimum 8 characters." },
              { required: true, message: "Old Password can not be empty!" },
            ]}
          >
            <Input.Password
              className="flex-1 form-row-element"
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            className="flex-1 form-row-element"
            label="New Password"
            name="newPassword"
            rules={[
              { min: 8, message: "New Passowrd must be minimum 8 characters." },
              { required: true, message: "New Password can not be empty!" },
            ]}
          >
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            className=""
            label="Confirm New Password"
            name="newPasswordConfirm"
            rules={[
              { min: 8, message: "New Password must be minimum 8 characters." },
              { required: true, message: "New Password can not be empty!" },
            ]}
          >
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </div>

        <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
          <Button type="primary" htmlType="submit">
            {loading ? "Loading.." : "change password"}
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;

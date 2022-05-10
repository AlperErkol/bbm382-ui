import { Form, Input, Button, Checkbox, Select } from "antd";
import {
  MailOutlined,
  KeyOutlined,
  SmileOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import UserService from "../services/UserService";

import Alert from "../components/Alert";

const { Option } = Select;

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setLoading(true);
    setErrorAlert(false);
    UserService.register(values)
      .then((response) => {
        if (response.data === "") {
          setErrorAlert(true);
        } else {
          toast.success("🦄 Success, you are redirecting...!", {
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
    <div className="signup-tab flex px-12">
      {errorAlert && (
        <div>
          <Alert text="An error occured. Check your information!" />
        </div>
      )}

      <div className="flex flex-col items-center">
	  	<div className="w-32 h-32 rounded-full mr-12 bg-tertiary"></div>
		<button className="">Change Photo</button>
	  </div>
      <Form
        className="edit-profile-form"
        layout="vertical"
        size="large"
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex">
          <Form.Item
            className="flex-1 form-row-element"
            label="Name"
            name="firstName"
            rules={[{ min: 3, message: "Name must be minimum 3 characters." }]}
          >
            <Input className="bg-default-primary" prefix={<SmileOutlined />} />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label="Surname"
            name="lastName"
            rules={[
              { min: 2, message: "Surname must be minimum 2 characters." },
            ]}
          >
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>
        </div>
        <div className="flex">
          <Form.Item
            className="flex-1 form-row-element"
            label="E-Mail"
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item className="flex-1" name="userType" label="User Type">
            <Select allowClear>
              <Option value="student">Student</Option>
              <Option value="student_representative">
                Student Representative
              </Option>
              <Option value="graduate">Graduate</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item
            className="flex-1 form-row-element"
            label="Position"
            name="password"
            rules={[
              { min: 6, message: "Password must be at leats 6 characters." },
            ]}
          >
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>

          <Form.Item
            className="flex-1"
            label="Company"
            name="confirmPassword"
            rules={[
              { min: 3, message: "Password must be at leats 3 characters." },
            ]}
          >
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>
        </div>

        <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
          <Button type="primary" htmlType="submit">
            {loading ? "Loading.." : "edit profile"}
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;

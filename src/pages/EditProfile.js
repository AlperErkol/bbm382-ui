import { Form, Input, Button, Select, Upload } from "antd";
import { useState } from "react";

import UserService from "../services/UserService";
import Alert from "../components/Alert";

import { MailOutlined, SmileOutlined, IdcardOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadProfilePhoto from "../components/UploadProfilePhoto";
import imagePath from "../utils/ImagePath";

const { Option } = Select;

const changeProfilePhoto = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      alert(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      alert(`${info.file.name} file upload failed.`);
    }
  },
};

const EditProfile = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const onFinish = (values) => {
    values.userId = data.userId;
    setLoading(true);
    setErrorAlert(false);
    UserService.updateUser(values)
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
    <div className="signup-tab flex px-12">
      {errorAlert && (
        <div>
          <Alert text="An error occured. Check your information!" />
        </div>
      )}

      <div className="flex flex-col items-center mr-12">
        <div className="w-32 h-32 rounded-full mb-2 border-2 flex items-center justify-center">
          {data.userImage !== null ? <img className="user-image rounded-full" src={(imagePath+"/"+data.userImage)}/> : (<div></div>)}
        </div>
        <UploadProfilePhoto />
      </div>
      <Form
        className="edit-profile-form"
        layout="vertical"
        size="large"
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          userType: data.userType,
          position: data.position,
          company: data.company,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex">
          <Form.Item
            className="flex-1 form-row-element"
            label="Name"
            name="firstName"
            rules={[
              { min: 3, message: "Name must be minimum 3 characters." },
              { required: true, message: "First name cane not be empty!" },
            ]}
          >
            <Input className="bg-default-primary" prefix={<SmileOutlined />} />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label="Surname"
            name="lastName"
            rules={[
              { min: 2, message: "Surname must be minimum 2 characters." },
              { required: true, message: "Last name can not be empty!" },
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
              { required: true, message: "E-mail can not be empty!" },
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
            name="position"
          >
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>

          <Form.Item className="flex-1" label="Company" name="company">
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

import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, KeyOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// User Service
import Alert from './Alert';
import UserService from '../services/UserService';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';



const LogIn = () => {

	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);

	
	const onFinish = (values) => {
		setLoading(true);
		setErrorAlert(false);
		UserService.logIn(values)
		.then(response => {
			console.log(response)
			if(response.data === ""){
				setErrorAlert(true);
			}else{
				localStorage.setItem("loggedUser", response.data.userId);
				toast.success('🦄 Success, you are redirecting...!', {
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
		.catch(error => {
			console.log(error)
			setLoading(false);
		});		
	};

	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return <div className='login-tab'>
		{
			errorAlert && <div>
			<Alert text="Check your email and/or password."/>
			</div>
		}

	<Form
      name='basic'
	  size='large'
	  layout='vertical'
	  labelCol={{ span: 0 }}
      wrapperCol={{ span: 0 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <div className='flex'>

		<Form.Item
			className='flex-1 form-row-element'
			label="E-Mail"
			name="email"
			rules={[{
				type: 'email',
				message: 'The input is not valid E-mail!',
			  },
			  { required: true, message: 'Please enter your mail!' }
			]}
		>
			<Input prefix={<MailOutlined />} />
		</Form.Item>

		<Form.Item
			className='flex-1'
			label="Password"
			name="password"
			rules={[{ required: true, message: 'Please input your password!' }]}
			
		>
			<Input.Password prefix={<KeyOutlined />} />
		</Form.Item>
	  </div>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 12 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
	  <Button type="primary" htmlType="submit">{loading ? 'Loading..' : 'sign in'}</Button>
      </Form.Item>
    </Form>

	<ToastContainer />
    </div>;
};

export default LogIn;
import { Form, Input, Button, Checkbox, Select} from 'antd';
import { MailOutlined, KeyOutlined, SmileOutlined, IdcardOutlined} from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

import UserService from '../services/UserService';

import Alert from './Alert';


const { Option } = Select;

const Register = () => {

	const [loading, setLoading] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);



	const onFinish = (values) => {
		console.log(values);
		setLoading(true);
		setErrorAlert(false);
		UserService.register(values)
		.then(response => {
			if(response.data === ''){
				setErrorAlert(true);
			}else{
				toast.success('🦄 Registration is succeed!, you must wait for admin approval..!', {
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
			console.log(error);
			setLoading(false);
		});
		
	};

	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


   	return <div className='signup-tab'>
		   {
			errorAlert && <div>
			<Alert text="An error occured. Check your information!"/>
		</div>
		}

		   <Form
		   	layout='vertical'
			size='large'
			name="basic"
			labelCol={{ span: 0 }}
			wrapperCol={{ span: 0}}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			>
			<div className='flex'>
				<Form.Item
					className='flex-1 form-row-element'
					label="Name"
					name="firstName"
					rules={[{min:3, message: 'Name must be minimum 3 characters.'},{ required: true, message: 'Please enter your name!' }]}
				>
					<Input className='bg-default-primary' prefix={<SmileOutlined />} />
				</Form.Item>
				<Form.Item
					className='flex-1'
					label="Surname"
					name="lastName"
					rules={[{min:2, message: 'Surname must be minimum 2 characters.'},{ required: true, message: 'Please enter your surname!' }]}
				>
					<Input prefix={<IdcardOutlined />} />
				</Form.Item>
			</div>
			<div className="flex">
				<Form.Item
					className='flex-1 form-row-element'
					label="E-Mail"
					name="email"
					rules={[{type:'email', message: 'The input is not valid E-mail!'},{ required: true, message: 'Please enter your mail!' }]}
				>
					<Input prefix={<MailOutlined/>} />
				</Form.Item>
				<Form.Item 
					className='flex-1'
					name="userType"
					label="User Type"
					rules={[{ required: true, message: 'Please select valid type!' }]}>
					
					<Select
					
					allowClear
					>
						<Option value="student">Student</Option>
						<Option value="student_representative">Student Representative</Option>
						<Option value="graduate">Graduate</Option>
					</Select>
				</Form.Item>
			</div>

			<div className='flex'>
				<Form.Item
					className='flex-1 form-row-element'
					label="Password"
					name="password"
					rules={[{min:8, message: 'Password must be at leats 8 characters.'},{ required: true, message: 'Please enter your password!' }]}
				>
					<Input.Password prefix={<KeyOutlined/>} />
				</Form.Item>

				<Form.Item
					className='flex-1'
					label="Confirm Password"
					name="confirmPassword"
					rules={[{min:8, message: 'Password must be at leats 8 characters.'},{ required: true, message: 'Please enter your password!' }]}
				>
					<Input.Password prefix={<KeyOutlined/>} />
				</Form.Item>
			</div>
			<Form.Item
				name="termAndCondition"
				valuePropName="checked"
				wrapperCol={{ offset: 0, span: 12 }}
				rules={[{ required: true, message: 'You must accept terms and conditions to register!' }]}
			>
				<Checkbox>I agree to the terms and conditions.</Checkbox>
			</Form.Item>


				<Form.Item wrapperCol={{ offset: 0, span: 0 }}>
					<Button type="primary" htmlType="submit">{loading ? 'Loading..' : 'sign up'}</Button>
				</Form.Item>
			</Form>
			<ToastContainer />

  	</div>;
};

export default Register;
import { Form, Input, Button,Checkbox} from 'antd';
import { MailOutlined, KeyOutlined, SmileOutlined, IdcardOutlined} from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';



const Register = () => {

	const [loading, setLoading] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);



	const onFinish = (values) => {
		setLoading(true);
	};

	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


   	return <div className='signup-tab'>
		   {
			errorAlert && <div>
			
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
					name="name"
					rules={[{ required: true, message: 'Please enter your name!' }]}
				>
					<Input className='bg-default-primary' prefix={<SmileOutlined />} />
				</Form.Item>
				<Form.Item
					className='flex-1'
					label="Surname"
					name="surname"
					rules={[{ required: true, message: 'Please enter your surname!' }]}
				>
					<Input prefix={<IdcardOutlined />} />
				</Form.Item>
			</div>
			<Form.Item
				label="E-Mail"
				name="mail"
				rules={[{ required: true, message: 'Please enter your mail!' }]}
			>
				<Input prefix={<MailOutlined/>} />
			</Form.Item>

			<div className='flex'>
				<Form.Item
					className='flex-1 form-row-element'
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please enter your password!' }]}
				>
					<Input.Password prefix={<KeyOutlined/>} />
				</Form.Item>

				<Form.Item
					className='flex-1'
					label="Confirm Password"
					name="confirm-password"
					rules={[{ required: true, message: 'Please enter your password!' }]}
				>
					<Input.Password prefix={<KeyOutlined/>} />
				</Form.Item>
			</div>
			<Form.Item name="termAndCondition" valuePropName="checked" wrapperCol={{ offset: 0, span: 12 }}>
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
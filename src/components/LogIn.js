import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, KeyOutlined} from '@ant-design/icons';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const LogIn = () => {

	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);


	const onFinish = (values) => {
		setLoading(true);
		
	};

	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return <div className='login-tab'>
		{
			errorAlert && <div>
			
		</div>
		}

	<Form
      name="basic"
	  size='large'
	  layout='vertical'
	  labelCol={{ span: 0 }}
      wrapperCol={{ span: 0 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className='flex'>

		<Form.Item
			className='flex-1 form-row-element'
			label="E-Mail"
			name="email"
			rules={[{ required: true, message: 'Please enter your mail!' }]}
		>
			<Input prefix={<MailOutlined />} />
		</Form.Item>

		<Form.Item
			className='flex-1'
			label="Password"
			name="pass"
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


    </div>;
};

export default LogIn;
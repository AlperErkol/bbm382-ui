import {Link} from 'react-router-dom';
import Register from '../components/Register';
import 'antd/dist/antd.css';



const Account = () => {
  return <div className='login'>
	<div className='bg-default-primary wrapper h-full w-full flex flex-col justify-center items-center pt-10'>
		<div className='mb-8'>
			<span className='text-default-white text-lg font-bold uppercase'>I already have an account.</span>
			<Link className='text-default-white text-lg font-bold uppercase' to={'/account/signin'}>
				<span className='text-tertiary'> Sign In.</span>
			</Link>
		</div>
		<div className='w-1/3 h-1/2'>
		<Register/>
		</div>
	</div>
  </div>;
};

export default Account;
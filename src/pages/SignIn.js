import LogIn from '../components/LogIn';
import {Link} from 'react-router-dom';

const Account = () => {
  return <div className='login'>
	<div className='bg-default-primary wrapper h-full w-full flex flex-col justify-center items-center pt-10'>
		<div className='mb-8'>
			<span className='text-default-white text-lg font-bold uppercase'>Don't have an account yet?</span>
			<Link className='text-default-white text-lg font-bold uppercase' to={'/account/signup'}>
				<span className='text-default-secondary'> Sign Up</span>.
			</Link>
		</div>
		<div className='w-1/3 h-1/2'>
		<LogIn/>
		</div>
	</div>
  </div>;
};

export default Account;
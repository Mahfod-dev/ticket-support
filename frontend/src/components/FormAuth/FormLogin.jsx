import { FaSignInAlt } from 'react-icons/fa';
import { Input } from '../ui/Input';
import Button from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';

export const LoginRegister = () => {
	const {
		email,
		password,
		handleInputChange,
		values,
		reset,
	} = useForm({email: '',password: ''});

	const handleRegister = (e) => {
		e.preventDefault();

		if (password !== password2) {
			return toast.error('Passwords do not match');
		}

		reset();
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt />
					<span>Login</span>
				</h1>
				<p>Please Sign in</p>
			</section>
			<section className='form'>
				<form onSubmit={handleRegister}>
				
					<Input
						name='email'
						type='email'
						placeholder='Enter your email'
						onChange={handleInputChange}
						value={email}
					/>
					<Input
						name='password'
						type='password'
						placeholder='Enter your password'
						onChange={handleInputChange}
						value={password}
					/>
			

					<div className='form-group'>
                        <Button type='submit' text='Login' />
					</div>
				</form>
			</section>
		</>
	);
};

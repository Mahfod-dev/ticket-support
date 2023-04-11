import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { Input } from '../ui/Input';
import Button from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { showToast } from '../../helpers/showToast';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducer/auth/authService';
import { clearNotification } from '../../redux/reducer/notifications/notificationSlice';

export const LoginRegister = () => {
	const { email, password, handleInputChange, values, reset } = useForm({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const notifications = useSelector((state) => state.notification);

	const handleRegister = (e) => {
		e.preventDefault();

		if (email.trim() === '' || password.trim() === '') {
			return toast.error('All fields are required');
		}

		dispatch(login(values));
		dispatch(clearNotification());

		navigate('/');

		reset();
	};

	const showNotification = useCallback(
		(type) => {
			let { global } = notifications;

			const message = global.message ? global.message : type;

			if (notifications && global.type === type) {
				showToast(type, message);
				dispatch(clearNotification());
			}
		},
		[notifications, dispatch]
	);

	useEffect(() => {
		showNotification('success');
		showNotification('error');
	}, [showNotification]);

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

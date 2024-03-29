import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';

// Components UI
import { Input } from '../ui/Input';
import Button from '../ui/Button';

// Hooks
import { useForm } from '../../hooks/useForm';

// Helpers
import { toast } from 'react-toastify';
import { showToast } from '../../helpers/showToast';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/reducer/auth/authService';
import { clearNotification } from '../../redux/reducer/notifications/notificationSlice';

export const FormRegister = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const notifications = useSelector((state) => state.notification);
	const { error } = useSelector((state) => state.auth);

	const { name, email, password, password2, handleInputChange, reset } =
		useForm({
			name: 'mahfod',
			email: 'mahfod.dev@gmail.com',
			password: '1234567',
			password2: '1234567',
		});

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

	const handleRegister = (e) => {
		e.preventDefault();

		if (password !== password2) {
			return toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password,
			};
			dispatch(register(userData));

			setTimeout(() => {
				navigate('/');
			}, 2000);

			reset();
		}

		reset();
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser />
					<span>Register</span>
				</h1>
				<p>Please create an account</p>
			</section>
			<section className='form'>
				<form onSubmit={handleRegister}>
					<Input
						name='name'
						type='text'
						placeholder='Enter your name'
						onChange={handleInputChange}
						value={name}
					/>
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
					<Input
						name='password2'
						type='password'
						placeholder='Confirm your password'
						onChange={handleInputChange}
						value={password2}
					/>

					<div className='form-group'>
						<Button type='submit' text='Register' />
					</div>
				</form>
			</section>
		</>
	);
};

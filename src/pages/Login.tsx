import { ChevronDownIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { LoadingSpinner } from '../components/Login/LoadingSpinner';
import { login } from '../store/services/AuthSlice';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';

const users = ["Əli Quliyev", "Səidə Məmmədova", "Məhəmməd Əlizadə"]

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!role.length)return toast.error('Please select a role');
		if (!password.length) return toast.error('Please enter a password');

		dispatch(login({ username: role, password }))
		.then(() => {
			const { auth } = store.getState();
			if (auth.isAuthenticated) {
				toast.success('Login successful');
				navigate('/dashboard');
			}
			else {
				toast.error('Login failed');
			}
		})

	}

	if (loading) {
		return <LoadingSpinner size='lg' color='border-button' />
	}

	return (
	<form className="w-full max-w-md space-y-4 font-lato_400" onSubmit={(e) =>handleSubmit(e)}>
		<h1 className="text-xl text-white">
			Daxil olmaq üçün zəhmət olmasa rolunuzu seçin:
		</h1>
		<div className="space-y-4">
			<div className="relative text-lg">
				<select
					value={role}
					onChange={(e) => setRole(e.target.value)}
					className="w-full px-5 py-5 bg-input_bg rounded-t-md appearance-none pr-10 text-input outline-none transition-all"
				>
					<option value="" disabled>Rolunuz</option>
					{users.map((user, index) => (
						<option key={index} value={user}>
							{user}
						</option>
					))}
				</select>
				<ChevronDownIcon className="h-5 absolute right-4 top-1/2 -translate-y-1/2 text-input hover:text-input/90 pointer-events-none select-none" />
			</div>
			<div className="relative text-lg">
				<input
					type={showPassword ? 'text' : 'password'}
					placeholder="Parol" value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full px-5 py-5 bg-input_bg rounded-t-md pr-10 text-input outline-none transition-all"
				/>
				<button
					onClick={() => setShowPassword(!showPassword)}
					className="absolute right-4 top-1/2 -translate-y-1/2 text-input hover:text-input/90 transition-colors select-none"
					type="button"
				>
					{showPassword ? <EyeSlashIcon className='h-5' /> : <EyeIcon className='h-5' />}
				</button>
			</div>
			<button type='submit' 
				className="w-full bg-button hover:bg-button/90 text-text font-lato_700 py-3 px-4 rounded-md transition-all outline-none cursor-pointer"
			>
				Növbəti
			</button>
		</div>
	</form>
	);
};

export default Login;

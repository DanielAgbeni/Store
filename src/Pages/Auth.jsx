import React, { useState } from 'react';

const Auth = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-200 to-white'>
			<div className='bg-white rounded-lg shadow-md p-8 max-w-md w-full'>
				<h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='name'
							className='block text-gray-700 font-bold mb-2'>
							Your Name
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-gray-700 font-bold mb-2'>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='password'
							className='block text-gray-700 font-bold mb-2'>
							Password
						</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							required
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							type='submit'
							className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
							Continue
						</button>
						<a
							href='#'
							className='inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800'>
							Already have an account? Login here
						</a>
					</div>
					<div className='mt-4'>
						<label className='inline-flex items-center'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-red-600'
								required
							/>
							<span className='ml-2 text-gray-700'>
								By continuing, I agree to the terms of use & privacy policy.
							</span>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;

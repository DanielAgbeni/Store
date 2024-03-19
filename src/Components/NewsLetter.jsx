import React from 'react';

const NewsLetter = () => {
	return (
		<div>
			<div className='bg-gradient-to-b from-pink-200 to-white py-8 w-screen'>
				<div className='max-w-3xl mx-auto px-4'>
					<h2 className='text-2xl md:text-4xl font-bold text-center mb-4'>
						Get Exclusive Offers On Your Email
					</h2>
					<p className='text-lg md:text-xl text-center mb-8'>
						Subscribe to our newsletter and stay updated
					</p>
					<div className='flex justify-center'>
						<div className='flex items-center rounded-full bg-gray-200 px-4 py-2'>
							<input
								type='email'
								placeholder='Your Email Id'
								className='bg-transparent outline-none text-sm md:text-base px-2'
							/>
							<button className='bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition-colors duration-300'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;

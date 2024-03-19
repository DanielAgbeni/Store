import React from 'react';
import exImg from '../assets/exclusive_image.png';

const Offers = () => {
	return (
		<div className='bg-gradient-to-b from-pink-200 to-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8 w-screen'>
			<div className='md:w-full mb-4 md:mb-0 text-center md:text-left'>
				<h2 className='text-2xl md:text-3xl font-bold mb-2'>
					Exclusive Offers For You
				</h2>
				<p className='text-sm md:text-lg mb-4'>ONLY ON BEST SELLERS PRODUCTS</p>
				<button className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300'>
					Check Now
				</button>
			</div>
			<div className='md:w-1/2'>
				<img
					src={exImg}
					alt='Exclusive Offer'
					className='max-w-full h-auto mx-auto'
				/>
			</div>
		</div>
	);
};

export default Offers;

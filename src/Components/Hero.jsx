import React from 'react';
import img from '../assets/hero_image.png';
import hi from '../assets/hand_icon.png';

const Hero = () => {
	return (
		<div className='bg-gradient-to-b from-pink-200 to-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8 w-screen'>
			<div className='md:w-1/2 mb-4 md:mb-0 text-center md:text-left'>
				<h2 className='text-2xl md:text-4xl font-bold mb-2'>
					NEW ARRIVALS ONLY
				</h2>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>
					new <span className='waving-hand'>✋</span> <br /> collections
				</h1>
				<p className='text-xl md:text-2xl font-bold mb-6'>for everyone</p>
				<button className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300'>
					Latest Collection
				</button>
			</div>
			<div className='md:w-1/2'>
				<img
					src={img}
					alt='New Collection'
					className='max-w-full h-auto mx-auto'
				/>
			</div>
		</div>
	);
};

export default Hero;

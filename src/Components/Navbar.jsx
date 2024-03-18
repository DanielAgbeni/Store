import React, { useState } from 'react';
import logo from '/logo.png';
import cart from '../assets/cart_icon.png';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
	const [menu, setMenu] = useState('shop');
	return (
		<div className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
			{/* Desktop view */}
			<div className='hidden md:flex w-full h-full items-center justify-between'>
				<div className=' flex items-center justify-between gap-2'>
					<img
						src={logo}
						alt=''
						className=' h-12 w-12'
					/>
					<p className=' font-bold text-4xl'>Storre</p>
				</div>
				<div>
					<ul className=' flex items-center justify-center gap-4 text-xl'>
						<li
							onClick={() => {
								setMenu('shop');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							Shop
							{menu === 'shop' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('men');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							Men
							{menu === 'men' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('women');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							Women
							{menu === 'women' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('kids');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							Kids
							{menu === 'kids' ? <hr /> : ''}
						</li>
					</ul>
				</div>
				<div className='flex items-center justify-between gap-3'>
					<div className=' py-1 px-4 rounded-full border border-black hover:bg-black cursor-pointer hover:text-white font-semibold transform transition ease-in-out duration-300 '>
						<p>Login</p>
					</div>
					<div className=' cursor-pointer'>
						<img
							src={cart}
							alt=''
							className=' h-8 w-8'
						/>
					</div>
				</div>
			</div>
			{/* Mobile view */}
			<div className='md:hidden  flex items-center justify-between'>
				<div className=' flex items-center justify-between gap-2'>
					<img
						src={logo}
						alt=''
						className=' h-8 w-8'
					/>
					<p className=' font-semibold text-2xl'>Storre</p>
				</div>
				<div>
					<p>Hi, Daniel</p>
				</div>
				<div className=' text-3xl'>
					<FaRegUserCircle />
				</div>
				<div>
					<img
						src={cart}
						alt=''
						className=' h-8 w-8'
					/>
				</div>
			</div>
			<div>
				<ul className=' md:hidden flex items-center justify-between gap-4 text-sm bg-gray-200 px-4 rounded-full mt-2'>
					<li
						onClick={() => {
							setMenu('shop');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						Shop
						{menu === 'shop' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('men');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						Men
						{menu === 'men' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('women');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						Women
						{menu === 'women' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('kids');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						Kids
						{menu === 'kids' ? <hr /> : ''}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

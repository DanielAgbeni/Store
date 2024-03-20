import React, { useEffect, useState } from 'react';
import logo from '/logo.png';
import cart from '../assets/cart_icon.png';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, setMenu] = useState('shop');
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setScroll(scrollTop > 300); // Set isScrolled to true if the page is scrolled
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`${
				scroll ? 'fixed' : 'relative'
			} z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-white trans`}>
			{/* Desktop view */}
			<div className='hidden md:flex w-full h-full items-center justify-between'>
				<Link to={'/'}>
					<div className=' flex items-center justify-between gap-2'>
						<img
							src={logo}
							alt=''
							className=' h-12 w-12'
						/>
						<p className=' font-bold text-4xl'>Storre</p>
					</div>
				</Link>
				<div>
					<ul className=' flex items-center justify-center gap-4 text-xl'>
						<li
							onClick={() => {
								setMenu('shop');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							<Link to={'/'}>Shop</Link>
							{menu === 'shop' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('men');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							<Link to={'men'}>Men</Link>
							{menu === 'men' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('women');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							<Link to={'/women'}>Women</Link>
							{menu === 'women' ? <hr /> : ''}
						</li>
						<li
							onClick={() => {
								setMenu('kid');
							}}
							className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
							<Link to={'/kids'}>Kids</Link>
							{menu === 'kid' ? <hr /> : ''}
						</li>
					</ul>
				</div>
				<div className='flex items-center justify-between gap-3'>
					<Link to={'/auth'}>
						<div className=' py-1 px-4 rounded-full border border-black hover:bg-black cursor-pointer hover:text-white font-semibold transform transition ease-in-out duration-300 '>
							<p>Login</p>
						</div>
					</Link>
					<Link to={'/cart'}>
						<div className=' cursor-pointer'>
							<img
								src={cart}
								alt=''
								className=' h-8 w-8'
							/>
						</div>
					</Link>
				</div>
			</div>
			{/* Mobile view */}
			<div className='md:hidden  flex items-center justify-between'>
				<Link to={'/'}>
					<div className=' flex items-center justify-between gap-2'>
						<img
							src={logo}
							alt=''
							className=' h-8 w-8'
						/>
						<p className=' font-semibold text-2xl'>Storre</p>
					</div>
				</Link>
				<div>
					<p>Hi, Daniel</p>
				</div>
				<Link to={'/auth'}>
					<div className=' text-3xl'>
						<FaRegUserCircle />
					</div>
				</Link>
				<Link to={'/cart'}>
					<div>
						<img
							src={cart}
							alt=''
							className=' h-8 w-8'
						/>
					</div>
				</Link>
			</div>
			<div>
				<ul className=' md:hidden flex items-center justify-between gap-4 text-sm bg-gray-200 px-4 rounded-full mt-2'>
					<li
						onClick={() => {
							setMenu('shop');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						<Link to={'/'}>Shop</Link>
						{menu === 'shop' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('men');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						<Link to={'/men'}>Men</Link>
						{menu === 'men' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('women');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						<Link to={'/women'}>Women</Link>
						{menu === 'women' ? <hr /> : ''}
					</li>
					<li
						onClick={() => {
							setMenu('kid');
						}}
						className=' cursor-pointer hover:scale-110 transform transition ease-in-out duration-300 '>
						<Link to={'/kids'}>Kids</Link>
						{menu === 'kid' ? <hr /> : ''}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

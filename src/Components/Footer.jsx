import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '/logo.png';

const Footer = () => {
	return (
		<footer className='bg-white py-4'>
			<div className='container mx-auto px-4 flex flex-col items-center justify-between md:flex-row'>
				<div className='flex items-center'>
					<img
						src={logo}
						alt='Shopper'
						className='h-8 mr-2'
					/>
					<h1 className='text-2xl font-bold'>STORRE</h1>
				</div>
				<nav className='mt-4 md:mt-0'>
					<ul className='flex space-x-4'>
						<li>
							<a
								href='#'
								className='text-gray-600 hover:text-gray-900'>
								Company
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-600 hover:text-gray-900'>
								Products
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-600 hover:text-gray-900'>
								Offices
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-600 hover:text-gray-900'>
								About
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-600 hover:text-gray-900'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className='mt-4 md:mt-0 flex space-x-4'>
					<a
						href='#'
						className='text-gray-600 hover:text-gray-900'>
						<FaInstagram className='h-6 w-6' />
					</a>
					<a
						href='#'
						className='text-gray-600 hover:text-gray-900'>
						<FaTwitter className='h-6 w-6' />
					</a>
					<a
						href='#'
						className='text-gray-600 hover:text-gray-900'>
						<FaWhatsapp className='h-6 w-6' />
					</a>
				</div>
			</div>
			<div className='mt-4 border-t border-gray-300 py-2 text-center'>
				<p className='text-gray-600'>
					Copyright &copy; 2023 - All Right Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

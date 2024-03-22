import React from 'react';
import arrow from '../assets/breadcrum_arrow.png';

const Breadcrumbs = (props) => {
	const { product } = props;
	return (
		<div className=' flex items-center justify-center gap-2'>
			Home{' '}
			<img
				src={arrow}
				alt=''
			/>
			Shop{' '}
			<img
				src={arrow}
				alt=''
			/>{' '}
			{product.category}{' '}
			<img
				src={arrow}
				alt=''
			/>
			{product.name}
		</div>
	);
};

export default Breadcrumbs;

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Category = (props) => {
	const { all_product } = useContext(ShopContext);
	return (
		<div className=' flex items-center justify-center'>
			<img
				src={props.banner}
				alt=''
			/>
		</div>
	);
};

export default Category;

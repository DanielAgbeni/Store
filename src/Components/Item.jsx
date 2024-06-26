import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Item = (props) => {
	const { addToCart } = useContext(ShopContext);
	const { product } = props;
	return (
		<div className='group relative'>
			<Link to={`/product/${props.id}`}>
				<div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none group-hover:cursor-pointer'>
					<img
						src={props.image}
						alt={props.name}
						className='w-full h-full object-center object-cover lg:w-full lg:h-full'
					/>
				</div>
				<div className='mt-4 flex flex-col justify-between'>
					<div>
						<h3 className='text-sm text-gray-700'>
							<span
								aria-hidden='true'
								className='absolute inset-0'
							/>
							{props.name}
						</h3>
					</div>
					<div className=' flex items-center justify-start gap-3 relative'>
						<p className='text-sm font-medium text-gray-900'>
							${props.new_price}
						</p>
						<p className='text-sm font-medium line-through text-gray-500'>
							${props.old_price}
						</p>
					</div>
				</div>
			</Link>
			<MdAddShoppingCart
				className=' z-50 absolute bottom-1 right-0 text-xl cursor-pointer'
				onClick={() => {
					addToCart(props.id);
				}}
			/>
		</div>
	);
};

export default Item;

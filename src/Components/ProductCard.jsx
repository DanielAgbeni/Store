import React from 'react';

const ProductCard = (props) => {
	const { product } = props;
	return (
		<div className='flex flex-col md:flex-row items-center md:items-start md:space-x-8'>
			<div className='md:w-1/2'>
				<img
					src={product.image}
					alt='Green Solid Zippered Full-Zip Slim Fit Bomber Jacket'
					className='w-full'
				/>
				<div className='flex justify-center md:justify-start space-x-2 mt-2'>
					<img
						src={product.image}
						alt='Thumbnail 1'
						className='w-16 h-16 object-cover border border-gray-300 cursor-pointer'
					/>
					<img
						src={product.image}
						alt='Thumbnail 1'
						className='w-16 h-16 object-cover border border-gray-300 cursor-pointer'
					/>
					<img
						src={product.image}
						alt='Thumbnail 1'
						className='w-16 h-16 object-cover border border-gray-300 cursor-pointer'
					/>
					<img
						src={product.image}
						alt='Thumbnail 1'
						className='w-16 h-16 object-cover border border-gray-300 cursor-pointer'
					/>
					<img
						src={product.image}
						alt='Thumbnail 1'
						className='w-16 h-16 object-cover border border-gray-300 cursor-pointer'
					/>
					{/* Add more thumbnail images as needed */}
				</div>
			</div>
			<div className='md:w-1/2 mt-4 md:mt-0'>
				<h1 className='text-2xl font-bold'>{product.name}</h1>
				<div className='flex items-center mt-2'>
					<div className='flex items-center'>
						{/* Add star rating component here */}
					</div>
					<span className='text-gray-500 ml-2'>(122)</span>
				</div>
				<div className=' flex items-center justify-start gap-4'>
					<p className='text-red-500 font-bold mt-4 line-through'>
						${product.old_price}
					</p>
					<p className='text-green-600 font-bold mt-4'>${product.new_price}</p>
				</div>
				<p className='text-gray-600 mt-2'>
					A lightweight, usually knitted, pullover shirt, close-fitting one with
					a round neckline and short sleeves, worn as an undershirt or outer
					garment.
				</p>
				<div className='flex items-center space-x-4 mt-4'>
					<div>
						<label
							htmlFor='size'
							className='text-gray-700 font-bold'>
							Size:
						</label>
						<select
							id='size'
							className='ml-2 border border-gray-300 rounded px-2 py-1'>
							<option value='s'>S</option>
							<option value='m'>M</option>
							<option value='l'>L</option>
							<option value='xl'>XL</option>
							<option value='xxl'>XXL</option>
						</select>
					</div>
				</div>
				<button className='bg-red-600 text-white py-2 px-4 rounded mt-4 hover:bg-red-700'>
					Add to Cart
				</button>
				<div className='mt-4'>
					<p className='text-gray-600'>
						Category: {product.category},{' '}
						{product.category == 'women' ? 'Crop Top' : 'T-shirt'}
					</p>
					<p className='text-gray-600'>Tags: Modern, Latest</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

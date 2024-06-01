import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { FcCancel } from 'react-icons/fc';

const CartItems = () => {
	const { all_product, cartItems, removeCart, getTotalCartAmmount } =
		useContext(ShopContext);
	const isCartEmpty = Object.values(cartItems).every((item) => item === 0);

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-6'>Shopping Cart</h1>
			{isCartEmpty ? (
				<div className='text-center text-gray-600'>No Item in the cart</div>
			) : (
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{all_product.map((item) => {
						if (cartItems[item.id] > 0) {
							return (
								<div
									key={item.id}
									className='bg-white shadow-lg rounded-lg p-6 flex items-center'>
									<div className='relative w-1/3'>
										<img
											src={item.image}
											alt={item.title}
											className='w-full h-full bg-gray-200 rounded-lg'
										/>
										<div className='absolute -top-1 -right-2 bg-red-500 text-white text-sm flex items-center justify-center h-5 w-5 rounded-full'>
											{cartItems[item.id]}
										</div>
									</div>
									<div className='ml-6 w-2/3'>
										<h3 className='text-xl font-semibold'>{item.title}</h3>
										<p className='text-gray-600 mt-2'>
											Price: ${item.new_price}
										</p>
										<p className='mt-1'>Quantity: {cartItems[item.id]}</p>
										<p className='mt-1 mb-4'>
											Total: ${item.new_price * cartItems[item.id]}
										</p>
										<button
											onClick={() => removeCart(item.id)}
											className='text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300'>
											Remove
										</button>
									</div>
								</div>
							);
						}
						return null; // Ensuring a consistent return value
					})}
				</div>
			)}

			<div className='mt-12 bg-white shadow-lg rounded-lg p-6'>
				<h2 className='text-xl font-semibold mb-4'>Cart Totals</h2>
				<div className='flex flex-col md:flex-row justify-between items-center mb-4'>
					<div className='w-full md:w-2/3 flex justify-between'>
						<input
							type='text'
							placeholder='Promo code'
							className='border border-gray-300 rounded-md px-4 py-2 mr-4 flex-grow'
						/>
						<button className='bg-black text-white rounded-md px-4 py-2'>
							Apply
						</button>
					</div>
				</div>
				<div className='border-t border-gray-300 pt-4'>
					<div className='flex justify-between mb-2'>
						<p className='text-gray-600'>Subtotal</p>
						<p>${getTotalCartAmmount()}</p>
					</div>
					<div className='flex justify-between mb-2'>
						<p className='text-gray-600'>Shipping Fee</p>
						<p>Free</p>
					</div>
					<div className='flex justify-between mt-4'>
						<p className='font-semibold'>Total</p>
						<p className='font-semibold'>${getTotalCartAmmount()}</p>
					</div>
					<button className='w-full bg-red-500 text-white rounded-md py-3 mt-6 hover:bg-red-600 transition-colors duration-300'>
						PROCEED TO CHECKOUT
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItems;

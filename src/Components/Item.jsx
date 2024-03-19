import React from 'react';

const Item = (props) => {
	return (
		<div className='group relative'>
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
				<div className=' flex items-center justify-start gap-3'>
					<p className='text-sm font-medium text-gray-900'>
						${props.new_price}
					</p>
					<p className='text-sm font-medium line-through text-gray-500'>
						${props.old_price}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Item;

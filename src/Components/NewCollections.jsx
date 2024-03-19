import React from 'react';
import new_collections from '../assets/new_collections';
import Item from './Item';

const NewCollections = () => {
	return (
		<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
			<h1 className='text-2xl font-extrabold tracking-tight text-gray-900 text-center'>
				NEW COLLECTIONS
			</h1>
			<hr className='md:w-[10%] w-[50%] mx-auto text-center' />
			<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-4 xl:gap-x-8'>
				{new_collections.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewCollections;

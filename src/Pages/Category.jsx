import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item';

const Category = (props) => {
	const { all_product } = useContext(ShopContext);
	return (
		<div className='max-w-7xl mx-auto w-screen'>
			<img
				src={props.banner}
				alt=''
				className=''
			/>
			<div>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
			</div>
			<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-4 xl:gap-x-8 px-12'>
				{all_product.map((item, i) => {
					if (props.category === item.category) {
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
					} else return null;
				})}
			</div>
		</div>
	);
};

export default Category;

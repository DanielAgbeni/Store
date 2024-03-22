import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import ProductCard from '../Components/ProductCard';

const Products = () => {
	const { all_product } = useContext(ShopContext);
	const { productId } = useParams();
	const product = all_product.find((e) => e.id === Number(productId));
	return (
		<div className=''>
			<Breadcrumbs product={product} />
			<ProductCard product={product} />
		</div>
	);
};

export default Products;

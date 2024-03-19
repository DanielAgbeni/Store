import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Auth from './Pages/Auth';
import Category from './Pages/Category';
import Products from './Pages/Products';
import Cart from './Pages/Cart';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/auth'
					element={<Auth />}
				/>
				<Route
					path='/men'
					element={<Category />}
					category='men'
				/>
				<Route
					path='/women'
					element={<Category />}
					category='women'
				/>
				<Route
					path='/kids'
					element={<Category />}
					category='kids'
				/>
				<Route
					path='/product'
					element={<Products />}>
					<Route
						path=':productId'
						element={<Products />}
					/>
				</Route>
				<Route
					path='/cart'
					element={<Cart />}
				/>
			</Routes>
		</div>
	);
};

export default App;

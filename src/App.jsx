import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Auth from './Pages/Auth';
import Category from './Pages/Category';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import men from './assets/banner_mens.png';
import women from './assets/banner_women.png';
import kids from './assets/banner_kids.png';
import ScrollToTop from './Components/ScrollToTop';
// Import the ScrollToTop component

const App = () => {
	return (
		<div>
			<Navbar />
			<ScrollToTop /> {/* Add the ScrollToTop component */}
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
					element={
						<Category
							banner={men}
							category='men'
						/>
					}
				/>
				<Route
					path='/women'
					element={
						<Category
							banner={women}
							category='women'
						/>
					}
				/>
				<Route
					path='/kids'
					element={
						<Category
							banner={kids}
							category='kid'
						/>
					}
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
			<Footer />
		</div>
	);
};

export default App;

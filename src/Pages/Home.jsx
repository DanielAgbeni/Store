import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Item from '../Components/Item';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
	return (
		<div className=' flex flex-col items-center justify-center'>
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<NewsLetter />
		</div>
	);
};

export default Home;

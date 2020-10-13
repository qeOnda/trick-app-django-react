import React, { useState, useEffect } from 'react';
import getUser from '../Components/getUser'
import axiosInstance from "../Components/axiosApi";


function Home() {
	const user = getUser()

	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		axiosInstance.get('tricks/?format=json')
			.then(response => {
				setTricks(response.data);
				setLoad(true);
			})
			.catch(error => {
				setError('Please sign in or register.');
				setLoad(true)
			})
	}, []);

	if(load) {
		return (
			<ul className="p-3 text-center">
				{
					error ? <li>{error}</li>:
					tricks.filter(trick => trick.user == user.user_id).map(filteredTrick => (
						<li>
							{filteredTrick.name} | {filteredTrick.cat_name}
						</li>
					)	
				)}						
			</ul>
		)
	} else {
		return (
			<div className="p-3 text-center">
				Loading...
			</div>
		);
	}	
}

export default Home;


import React, { useState, useEffect } from 'react';
import getUser from '../Services/getUser'
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'

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
				setError(error);
				setLoad(true)
			})
	}, []);

	if(error) {
		return (
			<div className="p-3 text-center">
				<p>{error}</p>
			</div>	
		)
	}

	if(load) {
		return (
			<div className="p-3 text-center">
				<h1>Hello, {user.name}!</h1>
				<ul className="p-3">
					{
						tricks.filter(trick => trick.user == user.user_id).map(filteredTrick => (
							<li>
								{filteredTrick.name} | {filteredTrick.cats}
							</li>
						)	
					)}						
				</ul>
			</div>	
		)
	} else {
		return (
			<Loading />
		);
	}	
}

export default Home;

import React, { useState, useEffect } from 'react';
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import getUser from '../Services/getUser'

function Home() {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');
	const user = getUser()


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

	
	console.log(tricks[0])

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
					<div className="pb-8">
						<h1>Hello, {user.name}!</h1>						
					</div>
				{tricks.map((trick) => (
					<div>
						<ul>
							<li>
								{trick.name} | {trick.cats} | {trick.user_name} 
							</li>
						</ul>
					</div>	
				))}	
			</div>	
		)
	} else {
		return (
			<Loading />
		);
	}	
}

export default Home;


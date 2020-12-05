import React, { useState, useEffect } from 'react';
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import getUser from '../Services/getUser'

import AddComponent from '../Components/AddComponent'

import HomeComponent from '../Components/HomeComponent'

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


	if(error) {
		return (
			<div className="p-3 text-center">
				<p>{error}</p>
			</div>	
		)
	}

	if(load) {
		return (
			<div className="bg-gray-100 h-screen pt-8 pb-8 pl-3 pr-3 md:p-8">
				<div className="pb-8 text-center">
						<h1>Hello, {user.name}!</h1>						
				</div>
				<div className="md:flex justify-between">
					<div className="md:w-2/3" >
						<HomeComponent tricks={tricks}/>	
					</div>
					<div className="md:w-1/3 pt-6 md:pl-10">
						<AddComponent />
					</div>
				</div>			
			</div>

		)
	} else {
		return (
			<Loading />
		);
	}	
}

export default Home;


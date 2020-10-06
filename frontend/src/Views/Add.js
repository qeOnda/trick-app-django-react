import React, { useState, useEffect } from 'react';
import getUser from '../Components/getUser'
import axiosInstance from "../Components/axiosApi";


function Add() {
	const user = getUser()

	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		axiosInstance.get('http://localhost:8000/api/tricks/?format=json')
			.then(response => {
				setTricks(response.data);
				setLoad(true);
			})
			.catch(error => {
				setError('Something went wrong.');
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

export default Add;


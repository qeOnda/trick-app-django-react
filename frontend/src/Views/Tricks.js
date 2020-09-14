import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tricks() {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		axios.get('http://localhost:8000/api/tricks/?format=json')
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
			<ul>
				{
					error ? <li>{error}</li>:
					tricks.map((trick, index) => 
						<li key={index}>Name:{trick.name}</li>		
				)}
			</ul>
		);
	} else {
		return (
			<div>
				Loading...
			</div>
		);
	}
};

export default Tricks;
import React, { useState, useEffect } from 'react';
import axiosInstance from "../Services/axiosApi";
import getUser from '../Services/getUser'
import Loading from '../Components/Loading'

function Grind() {
	const user = getUser()

	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		axiosInstance.get('tricks/?format=json')
			.then(response => {
				setTricks(response.data);
				setLoad(true);
			})
	}, []);

	if(load) {
		return (
			<div className="p-3 text-center">
				<h1>Hello, {user.name}!</h1>
				<ul className="p-3">
					{
						tricks.filter(trick => trick.user == user.user_id & trick.cats == 'grind').map(filteredTrick => (
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

export default Grind;
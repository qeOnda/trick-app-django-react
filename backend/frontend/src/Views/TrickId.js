import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import ReactPlayer from 'react-player/youtube'



const TrickId = ({ match, num, data }) => {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);

	const { params: { cats } } = match;

	const capitaliseStyle = {
		textTransform: 'capitalize'
	}

	useEffect(() => {
		getTricks()
	}, []);

	const getTricks = () => {
		const check = JSON.parse(localStorage.getItem("access_token"));
		axiosInstance.get('tricks/?format=json', { headers: {"Authorization" : `JWT ${check}`} })
			.then((response) => {
				const allTricks = response.data
				setTricks(allTricks)
				setLoad(true);			
			})
			.catch(error => {
				console.error(`Error: ${error}`)
				setLoad(true);			
			});
	}

	var trick = tricks.filter(t => t.cats == match.params.cats & t.id ==  match.params.id)

	
	if(load){ 
		return (
			<div className="p-8 h-full bg-gray-100">
				{trick.length ? (
					<div className="md:flex bg-white shadow-md rounded p-4">
						{trick.map(filteredTrick => (
							<div className="md:w-1/4 text-center md:text-left p-4 h-40" style={capitaliseStyle}>
									<p>Trick Name: {filteredTrick.name}</p> 
									<p>Category: {filteredTrick.cats}</p>
									<p>Skater: {filteredTrick.user_name}</p>
							</div>		
						))}						
						
						{trick.map(tri => (
							<div className="h-3/4 md:w-3/4 h-screen bg-shadow content-center ">
								<div className="p-5">	
									<div className='player-wrapper'>		
										<ReactPlayer
											url={tri.video}
											controls
											className='react-player'
											width='100%'
											height='100%'
										/>
									</div>
								</div>			
							</div>
						))}
					</div>	
				) : (
					<h2>Hmmm something went wrong there. Please try again.</h2>
				)}
			</div>			
		)
	} else {
		return (
			<Loading />
		);
	}			
}

export default TrickId;





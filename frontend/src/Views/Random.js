import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import ReactPlayer from 'react-player/youtube'



function Random() {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		axiosInstance.get('tricks/?format=json')
			.then(response => {
				let data = response.data
				let trickNum = Math.floor(Math.random() * data.length)
				let randomTrick = data[trickNum]
				setTricks(randomTrick);
				setLoad(true);
			})
	}, []);

	if(load){ 
		return (
			<div className="p-8 h-full bg-gray-100">
				{tricks ? (
					<div className="md:flex bg-white shadow-md rounded p-4 ">
						<div className="md:w-1/4 text-center md:text-left p-4 h-40">
								<p>Trick Name: {tricks.name}</p> 
								<p>Category: {tricks.cats}</p>
								<p>Skater: {tricks.user_name}</p>
								<p>ID: {tricks.id}</p>
						</div>		
												
						<div className="h-3/4 md:w-3/4 h-screen bg-shadow content-center ">
							<div className="p-5">	
								<div className='player-wrapper'>		
									<ReactPlayer
										url={tricks.video}
										controls
										className='react-player'
										width='100%'
										height='100%'
									/>
								</div>
							</div>			
						</div>
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

export default Random
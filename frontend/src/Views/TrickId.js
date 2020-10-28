import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import ReactPlayer from 'react-player/youtube'
import { layoutGenerator } from 'react-break'


const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});
const OnDesktop = layout.isAtLeast('tablet');
const Other = layout.isAtMost('phablet');


const TrickId = ({ match, num, data }) => {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);

	const { params: { cats } } = match;

	useEffect(() => {
		axiosInstance.get('tricks/?format=json')
			.then(response => {
				setTricks(response.data);
				setLoad(true);
			})
	}, []);

	var trick = tricks.filter(t => t.cats == match.params.cats & t.id ==  match.params.id)

	
	if(load){ 
		return (
			<div>
				<OnDesktop>
					<div className="theme-startup p-3">
						{trick.length ? (
							<div className="flex bg-primary h-screen ">
								{trick.map(filteredTrick => (
									<div className="w-1/4 text-center p-4">
											<p>Trick Name: {filteredTrick.name}</p> 
											<p>Category: {filteredTrick.cats}</p>
											<p>Skater: {filteredTrick.user_name}</p>
									</div>		
								))}						
								
								{trick.map(tri => (
									<div className="w-3/4 bg-shadow content-center ">
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
				</OnDesktop>

				<Other>	
					<div className="theme-startup p-3 ">
						{trick.length ? (
							<div className="bg-primary ">
								{trick.map(filteredTrick => (
									<div className="p-4 text-center">
											<p>Trick Name: {filteredTrick.name}</p> 
											<p>Category: {filteredTrick.cats}</p>
											<p>Skater: {filteredTrick.user_name}</p>
									</div>		
								))}						
								
								{trick.map(tri => (
									<div className="bg-shadow h-3/4 h-screen">
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
				</Other>
			</div>				
		)
	} else {
		return (
			<Loading />
		);
	}			
}

export default TrickId;





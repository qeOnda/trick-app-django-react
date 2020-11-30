import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'
import CatsId from './CatsId'



const Cats = ({match}) => {
	const [tricks, setTricks] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		axiosInstance.get('tricks/?format=json')
			.then(response => {
				setTricks(response.data);
				setLoad(true);
			})
	}, []);

	
	const check = tricks.map( (value) => value.cats)
		.filter( (value, index, _arr) => _arr.indexOf(value) == index);


	const linklist = check.map((trick) => {
		return (
			<li>
				<Link 
					to={`${match.url}/${trick}`}
					className="md:-m-3 md:p-3 md:space-x-3 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"
				>
					{trick}
				</Link>
			</li>
		)
	})

	if(load){
		return (
			<div className="bg-gray-100 md:flex md:h-full h-screen w-screen p-8">
				<div className="md:w-1/4 h-1/4 md:h-screen md:mr-4">
					<div className="bg-white shadow-md rounded h-full pb-2 md:p-4">
						<div className="invisible md:visible text-center md:text-left md:mb-8">
							<h1>Categories</h1>
						</div>
						<div className="text-center md:text-left md:mt-4 mb-4">
							<ul className="grid gap-y-4 md:gap-y-8">{linklist}</ul>
						</div>	
					</div>		
				</div>
				<Route
					path={`${match.url}/:cats`}
					render={(props) => <CatsId data={tricks} {...props} />}
				/>
			</div>
		)
	} else {
		return (
			<Loading />
		);
	}
}

export default Cats;


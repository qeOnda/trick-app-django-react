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
				<Link to={`${match.url}/${trick}`}>{trick}</Link>
			</li>
		)
	})

	if(load){
		return (
			<div className="bg-gray-100 md:flex md:h-full h-screen p-8">
				<div className="md:w-1/4 h-40 md:h-screen md:mr-4">
					<div className="bg-white shadow-md rounded h-full p-4">
						<div className="text-center md:text-left ">
							<h1>Categories</h1>
						</div>
						<div className="text-center md:text-left mt-4 mb-2">		
							<ul>{linklist}</ul>
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


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
			<div className="theme-startup flex h-screen p-3">
				<div className="p-3 w-1/4 bg-primary ">
					<div className="">
						<h1>Categories</h1>
					</div>
					<div className="mt-2">		
						<ul>{linklist}</ul>
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


import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";
import Loading from '../Components/Loading'

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

	return (
		<div>
			<div>
				<div>
					<h3>Categories</h3>
					<ul>{linklist}</ul>
				</div>
			</div>

			<Route
				exact path={`${match.url}/:cats`}
				render={(props) => <trick data={tricks} {...props} />}
			/>
			<Route
				exact path={match.url}
				render={() => <div>Please select a product.</div>}
			/>
		</div>
	)
}

export default Cats;


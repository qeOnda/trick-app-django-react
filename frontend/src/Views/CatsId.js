import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";


const CatsId = ({ match, data }) => {
	const { params: { cats } } = match;

	var category = data.filter(cat => cat.cats == match.params.cats)
	var catData;
	
	return (
		<div className="theme-startup bg-primary w-3/4">
			<div className="bg-shadow h-full p-5">
				{category.length ? (
					<ul>
						{
							category.map(filteredTrick => (
								<li>
									<Link to={`/categories/${filteredTrick.cats}/${filteredTrick.id}`}>
										{filteredTrick.name} | {filteredTrick.cats} | {filteredTrick.user_name}
									</Link>	 
								</li>
							)	
						)}						
					</ul>
				) : (
					<h2>You haven't logged a trick yet!</h2>
				)}
			</div>	
		</div>
	)	
}

export default CatsId;





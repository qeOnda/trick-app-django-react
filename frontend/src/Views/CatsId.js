import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axiosInstance from "../Services/axiosApi";


const CatsId = ({ match, data }) => {
	const { params: { cats } } = match;

	var category = data.filter(cat => cat.cats == match.params.cats)
	var catData;
	
	return (
		<div className="md:w-3/4 h-3/4 w-full bg-gray-100">
			<div className="mt-4 md:mt-0 p-4 bg-white shadow-md rounded text-center md:text-left ">
				{category.length ? (
					<ul className="p-3 grid gap-y-6">
						{
							category.map(filteredTrick => (
								<li>
									<Link 
										to={`/categories/${filteredTrick.cats}/${filteredTrick.id}`}
									>
										<span className="-m-3 p-3 space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150">{filteredTrick.name} | {filteredTrick.cats} | {filteredTrick.user_name}</span>
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





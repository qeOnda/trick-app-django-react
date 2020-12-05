import React, { useState, useEffect } from 'react';
import axiosInstance from "../Services/axiosApi";
import Loading from './Loading'
import { Link, Route } from "react-router-dom";
import LearnedComponent from './LearnedComponent'

function HomeComponent(props) {

	return (
		<div className="">
			<div className="flex flex-col bg-white shadow-md rounded">
	  			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
	    			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
	      				<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
	        				<table className="min-w-full divide-y divide-gray-200">
	          					<thead>
	            					<tr>
										<th className="px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Name
										</th>
										<th className="px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Category
										</th>
										<th className="px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Status
										</th>
										<th className="px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
										</th>
									</tr>
	          					</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{props.tricks.map((trick) => (
										<tr>
											<td className="px-4 py-4 whitespace-no-wrap">
												<Link 
													to={`/categories/${trick.cats}/${trick.id}`}
												>
													<span className="-m-3 p-3 space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150">{trick.name}</span>
												</Link>                
											</td>
											<td className="px-4 py-4 whitespace-no-wrap">
												{trick.cats}                
											</td>
											<td className="px-4 py-4 whitespace-no-wrap">
												 {trick.learned ? 
												 	<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">	
												 		learned!
												 	</span>: 
												 	<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800">
														learning
													</span>
												}		
											</td>
											<td className="px-4 py-4 whitespace-no-wrap">
												<LearnedComponent trick={trick}/>
											</td>
											
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default HomeComponent;
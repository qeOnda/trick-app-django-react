import React from 'react'
import { Link } from "react-router-dom";


const Category = () => {
	return (
		<div className="p-3 text-center">
			<ul>
				<li>
					<Link to="/categories/flip">Flip</Link>
				</li>
				<li>
					<Link to="/categories/grind">Grind</Link>
				</li>
				<li>
					<Link to="/categories/slide">Slide</Link>	
				</li>
				<li>
					<Link to="/categories/manual">Manual</Link>
				</li>
			</ul>	
		</div>	
	)
}

export default Category;


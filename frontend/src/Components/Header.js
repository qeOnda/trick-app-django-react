import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="border-b p-2 flex justify-between items-center">
			<div>
				<span className="font-bold p-8">
					<Link to='/'>TRICK APP</Link>
				</span>
				<span className="p-5">
					<Link to='/add'>Add Trick</Link>
				</span>
				<span className="p-5">
					<Link to='/categories'>Categories</Link>
				</span>
				<span className="p-5">
					<Link to='/random'>Random</Link>
				</span>
			</div>
		</header>
	)	
	
}

export default Header;
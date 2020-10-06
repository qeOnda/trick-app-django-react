import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { layoutGenerator } from 'react-break'
import Navigation from './Navigation'

import AuthService from '../Services/auth.service'

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});


const OnDesktop = layout.isAtLeast('tablet');
const Other = layout.isAtMost('phablet');

const Header = () => {
	const [currentUser, setCurrentUser] = useState(undefined) 

	useEffect(() => {
		const user = AuthService.getCurrentUser();
		
		if (user) {
			setCurrentUser(user)
		}	
	}, [])

	const logOut = () => {
		AuthService.logout()
	}

	return (
		<div>	
			<Other>
				<div className="theme-startup">
					<header className="bg-secondary shadow-lg border-b p-2 flex justify-between items-center">
						<span className="font-bold">
							<Link to='/'>TRICK APP</Link>
						</span>

						<Navigation />
						
					</header>
				</div>	
			</Other>

			<OnDesktop>
				<header className="bg-default shadow-sm border-b p-2 flex justify-between items-center">
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
						<span className="p-5">
							<Link to='/hello'>Hello</Link>
						</span>
					</div>
					
					{currentUser ? (
						<span className="items-left">
							<Link to='/'>{currentUser.user_id}</Link>
							<a href='/' onClick={logOut}>Logout</a>
						</span>				
					) : (
						<div className="items-left space-x-6">
							<span>
								<Link to='/Register'>Register</Link>
							</span>
							<span>	
								<Link to='/login'>Login</Link>
							</span>
						</div>
					)}
				</header>
			</OnDesktop>	
		</div>	
	)
};	

export default Header;
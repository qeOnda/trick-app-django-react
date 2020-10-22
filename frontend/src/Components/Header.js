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

const Header = ({ setLoadedHeader }) => {
	const [currentUser, setCurrentUser] = useState(undefined) 

	useEffect(() => {
		const user = AuthService.getCurrentUser();
		setTimeout(() => {
			setLoadedHeader();
		}, 1000);
		if (user) {
			setCurrentUser(user)
		}	
	}, [setLoadedHeader]);

	const logOut = () => {
		AuthService.logout()
	}

	return (
		<div>	
			<Other>
				<div className="theme-startup">
					<header className="bg-secondary shadow-lg border-b p-2 flex justify-between items-center">
						<span className="px-6 font-bold">
							<Link to='/'>TRICK APP</Link>
						</span>

						<Navigation />
						
					</header>
				</div>	
			</Other>

			<OnDesktop>
					{currentUser ? (
						<header className="bg-default shadow-sm border-b p-2 flex justify-between">
							<div>	
								<span className="px-6 font-bold">
									<Link to='/'>TRICK APP</Link>
								</span>
								<span className="px-4 space-x-8">
									<Link to='/add'>Add</Link>
									<Link to='/categories'>Categories</Link>
									<Link to='/random'>Random</Link>
									<Link to='/hello'>Hello</Link>
								</span>
							</div>	
							<div className="px-4 items-left">
								<a href='/' onClick={logOut}>Logout</a>
							</div>
						</header>					
					) : (
						<header className="bg-default shadow-sm border-b p-2 flex justify-between">
							<div>
								<span className="px-6 font-bold">
									<Link to='/'>TRICK APP</Link>
								</span>
							</div>
							<div className="px-4 items-left space-x-6">	
								<span>
									<Link to='/register'>Register</Link>
								</span>
								<span>	
									<Link to='/login'>Login</Link>
								</span>
							</div>	
						</header>
					)}
			</OnDesktop>	
		</div>	
	)
};	

export default Header;
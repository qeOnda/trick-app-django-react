import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { layoutGenerator } from 'react-break'
import Navigation from './Navigation'

import AuthService from '../Services/auth.service'

import test from './test.css'

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
		}, 100);
		if (user) {
			setCurrentUser(user)
		}	
	}, [setLoadedHeader]);

	const logOut = () => {
		AuthService.logout()
	}

	return (
		<div className="theme-startup">	
			<Other>
				<header className="bg-secondary shadow-lg border-b p-2 flex justify-between items-center">
					<span className="px-6 font-bold">
						<Link to='/'>TRICK APP</Link>
					</span>
					<Navigation />
				</header>	
			</Other>

			<OnDesktop>
					{currentUser ? (
						<header className="bg-default shadow-sm border-b p-2 flex justify-between">
							<div>	
								<span className="px-6 font-bold">
									<Link to='/'>TRICK APP</Link>
								</span>
								<span className="px-4 space-x-8">
									<NavLink 
										to="/add"
										activeStyle={{
											"text-decoration": "underline"
										}}
									>
										Add
									</NavLink>

									<NavLink 
										to='/categories'
										activeStyle={{
											"text-decoration": "underline"
										}}
									>
										Categories
									</NavLink>

									<NavLink 
										to='/random'
										activeStyle={{
											"text-decoration": "underline"
										}}
									>
										Random
									</NavLink>

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
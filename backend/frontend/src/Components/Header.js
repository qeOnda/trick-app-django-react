import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
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
	}, []);

	const logOut = () => {
		AuthService.logout()
	}

	return (
		<div className="">	
			<Other>
				<header className="bg-indigo-300 shadow-lg border-b p-2 flex justify-between items-center">
					<span className="px-6 font-bold">
						<Link to='/'>TRICK APP</Link>
					</span>
					<Navigation />
				</header>	
			</Other>

			<OnDesktop>
					{currentUser ? (
						<header className="bg-white shadow-sm border-b p-2 flex justify-between">
							<div>	
								<span className="px-6 font-bold">
									<Link to='/'>TRICK APP</Link>
								</span>
								<span className="px-4 space-x-8">
									<NavLink 
										to="/add"
										className="-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"
									>
										Add
									</NavLink>

									<NavLink 
										to='/categories'
										className="-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"
									>
										Categories
									</NavLink>

									<NavLink 
										to='/random'
										className="-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"
									>
										Random
									</NavLink>

								</span>
							</div>	
							<div className="mr-1 px-4 items-left -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150">
								<a href='/' onClick={logOut}>Log Out</a>
							</div>
						</header>					
					) : (
						<header className="bg-white shadow-sm border-b p-2 flex justify-between">
							<div>
								<span className="px-6 font-bold">
									<Link to='/'>TRICK APP</Link>
								</span>
							</div>
							<div className=" items-left ">	
								<span className="-m-2 mr-6 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150">
									<Link to='/register'>Register</Link>
								</span>
								<span className="mr-1 px-4 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150">	
									<Link to='/login'>Log In</Link>
								</span>
							</div>	
						</header>
					)}
			</OnDesktop>	
		</div>	
	)
};	

export default Header;
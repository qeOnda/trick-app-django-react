import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../Services/auth.service'

const NavigationMenu = (props) => {
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
			{currentUser ? (	
				<nav className="grid gap-y-8">
					<Link 
						to='/'
						onClick={props.closeMenu}
						className="underline"
					>	
						TRICK APP
					</Link>
					<Link 
						to='/add'
						onClick={props.closeMenu}
						className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"
					>	
						Add Trick
					</Link>
					<Link 
						to='/categories'
						onClick={props.closeMenu}
						className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"
					>
						Categories
					</Link>
					<Link 
						to='/random'
						onClick={props.closeMenu}
						className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"
					>
						Random
					</Link>
					<div className="space-y-6">
						<span className="w-full flex rounded-md shadow-sm">
							<a 
								href='/' 
								onClick={logOut}
								className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
							>
								Log Out
							</a>
						</span>	
					</div>
				</nav>
			) : (
				<nav className="grid gap-y-8">
					<Link 
						to='/'
						onClick={props.closeMenu}
						className="underline"
					>	
						TRICK APP
					</Link>
					<div className="space-y-6">
						<Link 
							to='/login'
							onClick={props.closeMenu}
							className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
						>	
							Log In
						</Link>
						<Link 
							to='/register'
							onClick={props.closeMenu}
							className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
						>	
							Register
						</Link>
					</div>	
				</nav>	
			)}
		</div>		
	)
}

export default NavigationMenu;
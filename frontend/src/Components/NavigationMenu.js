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
				<ul>
					<li>
						<Link 
							to='/'
							onClick={props.closeMenu}
							className="underline"
						>	
							TRICK APP
						</Link>
					</li>
					<span className="p-10">
						<li>
							<Link 
								to='/add'
								onClick={props.closeMenu}
							>	
								Add Trick
							</Link>
						</li>
						<li>
							<Link 
								to='/categories'
								onClick={props.closeMenu}
							>
								Categories
							</Link>
						</li>
						<li>
							<Link 
								to='/random'
								onClick={props.closeMenu}
							>
								Random
							</Link>
						</li>
					</span>	
					<li>
						<a href='/' onClick={logOut}>Logout</a>
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<Link 
							to='/'
							onClick={props.closeMenu}
							className="underline"
						>	
							TRICK APP
						</Link>
					</li>
					<li>
						<Link 
							to='/login'
							onClick={props.closeMenu}
						>	
							Login
						</Link>
					</li>
					<li>
						<Link 
							to='/register'
							onClick={props.closeMenu}
						>	
							Register
						</Link>
					</li>
				</ul>	
			)}
		</div>		
	)
}

export default NavigationMenu;
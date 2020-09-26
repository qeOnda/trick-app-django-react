import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props){
	return (
		<div>
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
			</ul>
		</div>	
	)
}

export default NavigationMenu;
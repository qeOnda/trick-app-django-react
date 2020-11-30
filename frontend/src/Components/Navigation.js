import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {
	const [showMenu, setShowMenu] = useState(false)

	const maskTransitions = useTransition(showMenu, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }, 
	})

	const transitions = useTransition(showMenu, null, {
		from: { opacity:0, transform:'translateX(-100%)' },
		enter: { opacity:1, transform:'translateX(0%)' },
		leave: { opacity:0, transform:'translateX(-100%)' }, 
	})   

	return (
		<nav>
			<span>
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => setShowMenu(!showMenu)}
				/>	
			</span>
			
			{
				maskTransitions.map(({ item, key, props }) =>
					item && 
					<animated.div 
						key={key} 
						style={props}
						className="fixed bg-gray-500 bg-opacity-75 top-0 left-0 w-full h-screen z-50"
						onClick={() => setShowMenu(false)}
					>
					</animated.div>
				)			
			}


			{
				transitions.map(({ item, key, props }) =>
					item && 
					<animated.div 
						key={key} 
						style={props}
						className="fixed bg-indigo-300 top-0 left-0 w-4/5 h-full z-50 p-3 "
					>
						<NavigationMenu 
							closeMenu={() => setShowMenu(false)}
						/>
					</animated.div>
				)			
			}

		</nav>
	)
}

export default Navigation
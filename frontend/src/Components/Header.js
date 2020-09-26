import React from 'react'
import { Link } from 'react-router-dom'
import { layoutGenerator } from 'react-break'
import Navigation from './Navigation'

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});


const OnDesktop = layout.isAtLeast('tablet');
const Other = layout.isAtMost('phablet');

const Header = () => (
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
				</div>
			</header>
		</OnDesktop>
		
	</div>	
);	

export default Header;
import React from 'react';
import { Link } from 'react-router-dom'

function RegLogMessage() {
	return (
		<div className="bg-gray-100 h-screen">	
			<div className="p-3 text-center">
				<p>Please <Link to='/login'><span className="text-indigo-300">sign in </span></Link> or <Link to='/register'><span className="text-indigo-300">register</span></Link>.</p>
			</div>	
		</div>		
	)
}

export default RegLogMessage;
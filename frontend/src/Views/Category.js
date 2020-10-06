import React from 'react'
import AuthService from '../Services/auth.service.js'


const Category = () => {
	const currentUser = AuthService.getCurrentUser();

	return (
		<div>
			<header>
				<h3>
					<strong>{currentUser.username}</strong>
				</h3>
				<p>
					<strong>Token: </strong>currentUser.accessToken.substring(0, 20)} ...{" "} 
					{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}		
				</p>
				<p>
					<strong>Id: </strong>{currentUser.id}
				</p>
				<p>
					<strong>Email: </strong>{currentUser.email}
				</p>
			</header>
		</div>
	)

}

export default Category;
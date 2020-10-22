import React from 'react'

function getUser() {
	const token = JSON.parse(localStorage.getItem("access_token"));
	if (token){ 
		const tokenParts = token.split('.');
		const encodedPayload = tokenParts[1];
		const rawPayload = atob(encodedPayload);
		const user = JSON.parse(rawPayload);
		return user
	} else {
		return null
	}
}

export default getUser;
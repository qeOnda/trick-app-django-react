import React from 'react'

function getUser() {
	const token = JSON.parse(localStorage.getItem("access_token"));

	const tokenParts = token.split('.');
	const encodedPayload = tokenParts[1];
	const rawPayload = atob(encodedPayload);
	const user = JSON.parse(rawPayload);
	return user
}

export default getUser;
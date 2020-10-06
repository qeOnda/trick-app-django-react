import React, { useState } from 'react'
import { useFormField } from '../Hooks/useFormField'
import axiosInstance from "./axiosApi";


function Login(){
	const usernameField = useFormField();
	const passwordField = useFormField();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault(usernameField.value, passwordField.value);
		//api.login(usernameField.value, passwordField.value)
		try {
			const response = axiosInstance.post('token/obtain/', {
				username: usernameField.value,
				password: passwordField.value
			});
			axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
			localStorage.setItem('access_token', response.data.access);
			localStorage.setItem('refresh_token', response.data.refresh);
			return data;
		} catch (error) {
			throw error;
		}			
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					id="username"
					{...usernameField}
				/>
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					id="password"
					{...passwordField}
				/>
			</div>
			<input type="submit" value="Submit"/>
		</form>			
	)
}

export default Login;
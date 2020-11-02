import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { history, withRouter } from 'react-router-dom';

import AuthService from "../Services/auth.service";
import axiosInstance from "../Services/axiosApi";


const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const Log = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
	
	const handleLogin = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			axiosInstance.post('token/obtain/', {
				username: username,
				password: password
			}).then(response => {
				if (response.data) {
						axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
						localStorage.setItem('access_token', JSON.stringify(response.data.access));
						localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
						props.history.push("/");
						window.location.reload();	
					}
			})
		}	
	};

	return (
		<div className="w-full theme-startup flex justify-center mt-6">
			<Form onSubmit={handleLogin} ref={form} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-8">	
					<div className="form-group mb-4" >
						<label htmlFor="username">Username</label>
						<Input
							type="text"
							name="username"
							value={username}
							className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Username"
							onChange={onChangeUsername}
							validations={[required]}
						/>
					</div>
					
					<div className="form-group mb-4">
						<label htmlFor="password">Password</label>
						<Input
							type="password"
							name="password"
							value={password}
							className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Password"
							onChange={onChangePassword}
							validations={[required]}
						/>
					</div>
				</div>	
				
				<div className="form-group">
					<button 
						disabled={loading}
						className="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						<span>Login</span>
					</button>
				</div>		

				{message && (
					<div className="form-group">> 
						<div role="alert">
							{message}
						</div>
					</div>	
				)}		
				<CheckButton style={{ display: "none" }} ref={checkBtn} />
			</Form>	
		</div>	
	)
}				

export default withRouter(Log);	
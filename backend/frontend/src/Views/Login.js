import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect, withRouter } from 'react-router-dom';
import AuthService from "../Services/auth.service";
import axiosInstance from "../Services/axiosApi";
import NotFound from './NotFound'



const required = (value) => {
	if (!value) {
		return (
			<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
				<strong class="font-bold">Error</strong>
				<span class="block sm:inline"> This is required!</span>
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
				try  {										
					localStorage.setItem('access_token', JSON.stringify(response.data.access));
					localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
					props.history.push("/");
					window.location.reload();	
				} catch(err)  {
					console.log("The error is: " + err)
					setMessage("Try again!")				
				}
			})
		}
	};

	return (
		<div className="h-screen bg-gray-100"> 	
			<div className="w-full flex justify-center pt-8">
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
								onChange={event => setUsername(event.target.value)}
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
								onChange={event => setPassword(event.target.value)}
								validations={[required]}
							/>
						</div>
					</div>	
					
					<div className="form-group">
						<button 
							disabled={loading}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							<span>Log In</span>
						</button>
					</div>		

					{message && (
						<div className="form-group">
							<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
								<strong class="font-bold">Error </strong>
								<span class="">{message}</span>
							</div>
						</div>	
					)}		
					<CheckButton style={{ display: "none" }} ref={checkBtn} />
				</Form>	
			</div>
		</div>			
	)
}				

export default withRouter(Log);	
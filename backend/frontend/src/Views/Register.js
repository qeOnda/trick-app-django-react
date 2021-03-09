import React, { useState, useRef } from "react";
import axiosInstance from "../Services/axiosApi";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { history, withRouter } from 'react-router-dom';



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

const Register = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			axiosInstance.post('user/create/', {
				username: username,
				password: password,
				email: email,
			}).then(
				props.history.push("/"),
				window.location.reload()	
			)
		}
	}		

	return (
		<div className="bg-gray-100 h-screen">
			<div className="w-full flex justify-center pt-8">
				<Form onSubmit={handleLogin} ref={form} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-8">	
						<div className="form-group mb-4">
							<label htmlFor="email">Email</label>
							<Input
								type="email"
								name="email"
								value={email}
								className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Email"
								onChange={event => setEmail(event.target.value)}
								validations={[required]}
							/>
						</div>

						<div className="form-group mb-4">
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
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

						>
							<span>Register</span>
						</button>
					</div>		
												
					<CheckButton style={{ display: "none" }} ref={checkBtn} />
				</Form>	
			</div>	
		</div>		
	)
}

export default withRouter(Register);
import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { history } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import AuthService from "../Services/auth.service";
import authHeader from "../Services/auth-header";
import instance from "./instance";
import axiosInstance from "./axiosApi";


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
					}
			})
		}	
	};

	return (
		<Form onSubmit={handleLogin} ref={form}>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<Input
					type="text"
					name="username"
					value={username}
					className="form-control"
					onChange={onChangeUsername}
					validations={[required]}
				/>
			</div>
			
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<Input
					type="password"
					name="password"
					value={password}
					className="form-control"
					onChange={onChangePassword}
					validations={[required]}
				/>
			</div>
			
			<div className="form-group">
				<button disabled={loading}>
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
	)
}				

export default withRouter(Log);	
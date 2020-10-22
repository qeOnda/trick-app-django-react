import React, { useState, useRef } from "react";
import axiosInstance from "../Services/axiosApi";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { history, withRouter } from 'react-router-dom';



const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
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

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

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
		<Form onSubmit={handleLogin} ref={form}>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<Input
					type="email"
					name="email"
					value={email}
					className="form-control"
					onChange={onChangeEmail}
					validations={[required]}
				/>
			</div>

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
				<button>
					<span>Register</span>
				</button>
			</div>		

					
			<CheckButton style={{ display: "none" }} ref={checkBtn} />
		</Form>	
	)
}

export default withRouter(Register);
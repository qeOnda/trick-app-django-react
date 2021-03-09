import React, { useState, useEffect, useRef } from 'react';
import getUser from '../Services/getUser'
import axiosInstance from "../Services/axiosApi";
import { history, withRouter } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
	if (!value) {
		return (
			<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
				<strong class="font-bold">Error</strong>
				<span class="block sm:inline"> This is required!</span>
			</div>
		);
	}
}

const AddComponent = (props) => {
	const form = useRef();
	const checkBtn = useRef();
	const user = getUser()

	const [name, setName] = useState("");
	const [cats, setCats] = useState("");
	const [video, setVideo] = useState("");
	const [owner, setOwner] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			const check = JSON.parse(localStorage.getItem("access_token"));
			const header = { headers: {"Authorization" : `JWT ${check}`} }
			const body = {
				name: name,
				cats: cats,
				video: video,
				user: user.user_id
			}

			axiosInstance.post('tricks/', body, header).then(
				props.history.push("/"),
				window.location.reload(),
			)
			.catch(error => {
				setError('Please sign in or register.');
				setLoading(true)
			})
		}		
	}

	return (
		<div className="w-full flex justify-center">
			<Form onSubmit={handleSubmit} ref={form} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-8">	
					<div className="form-group  mb-4">
						<label htmlFor="name">Trick Name: </label>
						<Input
							type="text"
							name="name"
							value={name}
							className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Trick Name"
							onChange={event => setName(event.target.value)}
							validations={[required]}
						/>
					</div>
					
					<div className="form-group mb-4">
						<label htmlFor="name">Video URL: </label>
						<Input
							type="text"
							name="video"
							value={video}
							className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Video URL"
							onChange={event => setVideo(event.target.value)}
							validations={[required]}
						/>
					</div>
					<div className="form-group mb-4">
						<label htmlFor="name">Category: 
							<select 
								value={cats} 
								onChange={event => setCats(event.target.value)}
								className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							>
								<option value="">--SELECT--</option>
								<option value="manual">Manual</option>
								<option value="slide">Slide</option>
								<option value="grind">Grind</option>
								<option value="flip">Flip</option>
							</select>	
						</label>
					</div>
				</div>
					
				<div className="form-group">
					<button 
						disabled={loading}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						<span>Add Trick</span>
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

export default withRouter(AddComponent);


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
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
}

const Add = (props) => {
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

	const onChangeName = (e) => {
		const trick = e.target.value;
		setName(trick);
	};
	const onChangeCats = (e) => {
		const category = e.target.value;
		setCats(category);
	};
	const onChangeVideo = (e) => {
		const vid = e.target.value;
		setVideo(vid);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			axiosInstance.post('tricks/', {
				name: name,
				cats: cats,
				video: video,
				user: user.user_id
			}).then(
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
		<div className="w-full theme-startup flex justify-center mt-6">
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
							onChange={onChangeName}
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
							onChange={onChangeVideo}
							validations={[required]}
						/>
					</div>
					<div className="form-group mb-4">
						<label htmlFor="name">Category: 
							<select 
								value={cats} 
								onChange={onChangeCats}
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
						className="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default withRouter(Add);


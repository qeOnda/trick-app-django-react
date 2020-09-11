import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tricks() {
	state = {
		tricks: []
	}

	componentDidMount() {
		axios.get("http://localhost:8000/api/tricks/")
			.then(res => {
				const tricks = res.data
				this.setState({ tricks });
			})
	}

	return (
		<ul>
			{ this.state.tricks.map(tricks => <li>{tricks.name}</li>)}
		</ul>
	)
}

export default Tricksx
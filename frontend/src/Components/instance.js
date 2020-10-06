import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:8000/api/',
	timeout: 5000,
	headers: {
		'Authorization': "JWT " + localStorage.getItem('token'),
		'Content-Type': 'application/json',
		'accept': 'application/json'
	}
});

export default instance	

import axios from 'axios'

const axiosInstance = axios.create({
	// baseURL: 'http://localhost:8000/api/',
	baseURL: 'https://trick-app-306710.nw.r.appspot.com/api/',	
	timeout: 5000,
	headers: {
		'Authorization': "JWT " + localStorage.getItem('access_token'),
		'Content-Type': 'application/json',
		'accept': 'application/json'
	}
});
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
			const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));

			return axiosInstance
				.post('token/refresh/', {refresh: refresh_token})
				.then((response) => {
					localStorage.setItem('access_token', JSON.stringify(response.data.access));
					localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));

					axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
					originalRequest.headers['Authorization'] = "JWT " + response.data.access;

					return axiosInstance(originalRequest);
				})
				.catch(err => {
					console.log(err)
				})
		}
		return Promise.reject(error)
	}	
)



export default axiosInstance	

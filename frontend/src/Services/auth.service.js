import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const login = (username, password) => {
	return axios
		.post(API_URL + "token/obtain/", {
			username,
			password,
		})
		.then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data
		});
};

const logout = () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
};	

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("access_token"));
};	

export default {
	login,
	logout,
	getCurrentUser,
};
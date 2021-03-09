import axios from "axios";

// const API_URL = "http://localhost:8000/api/";
const API_URL = "https://trick-app-306710.nw.r.appspot.com/api/";

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
	const check = JSON.parse(localStorage.getItem("access_token"));
	if (check){
		return true
	} else {
		return false
	}
};	

export default {
	login,
	logout,
	getCurrentUser,
};
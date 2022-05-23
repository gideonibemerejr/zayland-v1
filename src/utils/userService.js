import tokenService from "./tokenService";
import axios from "axios";
import getApiUrl from "./useApiUrl";

const { API_URL } = getApiUrl(window.location);

function signup(user) {
	return axios.post(`${API_URL}/auth/local/register`, user).then((res) => {
		if (res.data.user && res.data.jwt) {
			tokenService.setToken(res.data.jwt);
			return res.data.user;
		}
		throw new Error("Something Went Wrong");
	});
}

function getUser() {
	const id = tokenService.getUserFromToken();

	if (id) {
		return axios.get(`${API_URL}/users/${id}`).then((res) => {
			if (res.statusText === "OK") {
				return res.data;
			} else {
				throw new Error("Something went wrong");
			}
		});
	}
}

function login(user) {
	return axios
		.post(`${API_URL}/auth/local`, user)
		.then((res) => {
			// Handle success.
			console.log(res);
			if (res.data.user && res.data.jwt) {
				tokenService.setToken(res.data.jwt);
				return res.data.user;
			}
			throw new Error("Something Went Wrong");
		})
		.catch((error) => {
			return error;
		});
}

export default {
	signup,
	getUser,
	// logout,
	login,
};

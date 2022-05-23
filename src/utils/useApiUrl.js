const useApiUrl = (location) => {
	let API_URL;

	if (location && location.hostname.indexOf("localhost") > -1) {
		API_URL = "http://localhost:1337";
	} else {
		API_URL = "https://zayland-api.herokuapp.com";
	}

	return { API_URL };
};

export default useApiUrl;

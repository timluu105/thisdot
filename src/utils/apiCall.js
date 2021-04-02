import axios from "axios";

const Axios = axios.create({
	baseURL: (() => {
		return `https://api.github.com`;
	})(),
});

const apiCall = (data) => {
	return Axios({
		...data,
		headers: {
			...data.headers,
		},
	});
};

export default apiCall;

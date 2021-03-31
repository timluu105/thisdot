import axios from "axios";

const Axios = axios.create({
	baseURL: (() => {
		return `https://api.github.com`;
	})(),
});

export default (data) => {
	return Axios({
		...data,
		headers: {
			...data.headers,
		},
	});
};

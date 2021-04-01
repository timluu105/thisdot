import Axios from "../../utils/axios";

export const getUsers = async (params) =>
	Axios({
		method: "GET",
		url: `search/users`,
		params,
	});

import apiCall from "../../utils/apiCall";

export const getUsers = async (params) =>
	apiCall({
		method: "GET",
		url: "search/users",
		params,
	});

export const getUser = async (userId) =>
	apiCall({
		method: "GET",
		url: `users/${userId}`,
	});

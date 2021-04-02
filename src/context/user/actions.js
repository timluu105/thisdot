import * as API from "./api";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUsers = (dispatch) => async (params) => {
	try {
		const data = await API.getUsers(params);

		dispatch({
			type: GET_USERS_SUCCESS,
			payload: {
				...data,
				searchQuery: params.q,
				page: params.page,
			},
		});
	} catch {
		dispatch({
			type: GET_USERS_FAILURE,
		});
	}
};

export const getUser = (dispatch) => async (params) => {
	try {
		const data = await API.getUser(params);

		dispatch({
			type: GET_USER_SUCCESS,
			payload: data,
		});
	} catch {
		dispatch({
			type: GET_USER_FAILURE,
		});
	}
};

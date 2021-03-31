import * as API from "./api";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = (dispatch) => async (data) => {
	try {
		await API.getUsers(data);
		dispatch({
			type: GET_USERS_SUCCESS,
		});
	} catch {
		dispatch({
			type: GET_USERS_FAILURE,
		});
	}
};

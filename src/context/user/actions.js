import * as API from "./api";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const GET_NEXT_PAGE = "GET_NEXT_PAGE";
export const GET_PREV_PAGE = "GET_PREV_PAGE";

export const getUsers = (dispatch) => async (params) => {
	try {
		const data = await API.getUsers(params);

		dispatch({
			type: GET_USERS_SUCCESS,
			payload: {
				...data,
				searchQuery: params.q,
			},
		});
	} catch {
		dispatch({
			type: GET_USERS_FAILURE,
		});
	}
};

export const getNextPage = (dispatch) => (async) => {
	dispatch({
		type: GET_NEXT_PAGE,
	});
};

export const getPrevPage = (dispatch) => (async) => {
	dispatch({
		type: GET_PREV_PAGE,
	});
};

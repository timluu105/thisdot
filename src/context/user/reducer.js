import produce from "immer";

import {
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
} from "./actions";
import { initialState } from "./context";

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	return produce(state, (draft) => {
		switch (type) {
			case GET_USERS_SUCCESS:
				draft.users = payload.data.items;
				draft.count = payload.data.total_count;
				draft.searchQuery = payload.searchQuery;
				draft.page = payload.page;
				draft.userDetails = [];
				break;
			case GET_USERS_FAILURE:
				draft.users = [];
				draft.count = 0;
				draft.page = 1;
				draft.searchQuery = "";
				break;
			case GET_USER_SUCCESS:
				draft.userDetails.push(payload.data);
				break;
			case GET_USER_FAILURE:
				draft.userDetails = [];
				break;
			default:
				break;
		}
	});
};

export default reducer;

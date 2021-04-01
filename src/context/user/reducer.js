import produce from "immer";

import {
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE,
	GET_NEXT_PAGE,
	GET_PREV_PAGE,
} from "./actions";
import { initialState } from "./context";

export default (state = initialState, action) => {
	const { type, payload } = action;

	return produce(state, (draft) => {
		switch (type) {
			case GET_USERS_SUCCESS:
				draft.users = payload.data.items;
				draft.count = payload.data.total_count;
				draft.searchQuery = payload.searchQuery;
				break;
			case GET_USERS_FAILURE:
				draft.users = [];
				draft.count = 0;
				draft.page = 1;
				draft.searchQuery = "";
				break;
			case GET_NEXT_PAGE:
				draft.page += 1;
				break;
			case GET_PREV_PAGE:
				draft.page -= 1;
			default:
				break;
		}
	});
};

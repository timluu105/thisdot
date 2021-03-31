import produce from "immer";

import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./actions";
import { initialState } from "./context";

export default (state = initialState, action) => {
	const { type, payload } = action;

	return produce(state, (draft) => {
		switch (type) {
			case GET_USERS_SUCCESS:
				break;
			case GET_USERS_FAILURE:
				break;
			default:
				break;
		}
	});
};

import { createContext } from "react";

export const initialState = {
	users: [],
	userDetails: [],
	count: 0,
	page: 1,
	searchQuery: "",
};

const context = createContext();

export default context;

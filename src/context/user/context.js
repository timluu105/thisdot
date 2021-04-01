import { createContext } from "react";

export const initialState = {
	users: [],
	count: 0,
	page: 1,
	searchQuery: "",
};

const context = createContext();

export default context;

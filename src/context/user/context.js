import { createContext } from "react";

export const initialState = {
	users: [],
};

const context = createContext();

export default context;

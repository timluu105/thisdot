import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./context";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/constants/theme";

const Main = () => {
	return (
		<ContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ContextProvider>
	);
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import UserLists from "./components/UserLists";
import SearchBar from "./components/SearchBar";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
		marginTop: theme.spacing(5),
		margin: "auto",
		maxWidth: 800,
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box m={1}>
				<SearchBar />
				<UserLists />
			</Box>
		</div>
	);
};

export default App;

import React from "react";
import UserLists from "./components/UserLists";
import SearchBar from "./components/SearchBar";
import { Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 700,
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Box m={12}>
					<SearchBar />
					<UserLists />
				</Box>
			</Paper>
		</div>
	);
};

export default App;

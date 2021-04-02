import React, { useState } from "react";
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
		maxWidth: 1000,
	},
}));

const App = () => {
	const classes = useStyles();
	const [searchBtn, setSearchBtn] = useState(false);

	return (
		<div className={classes.root}>
			<Box m={1}>
				{searchBtn ? (
					<UserLists setSearchBtn={setSearchBtn} />
				) : (
					<SearchBar setSearchBtn={setSearchBtn} />
				)}
			</Box>
		</div>
	);
};

export default App;

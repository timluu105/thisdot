import React from "react";
import { Typography, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

const SearchBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h4" component="h5">
				{" "}
				<SearchIcon />
				Search more than <b>68M</b> users
			</Typography>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
		</div>
	);
};

export default SearchBar;

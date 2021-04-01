import React, { useState } from "react";
import { useUser } from "../../context/user";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	searchBar: {
		marginTop: 15,
	},
	searchBox: {
		width: "100%",
	},
	searchButton: {
		marginTop: 10,
	},
});

const SearchBar = () => {
	const classes = useStyles();
	const [searchQuery, setSearchValue] = useState("");
	const {
		data: { page, count },
		methods: { getUsers },
	} = useUser();

	const handleSubmit = () => {
		getUsers({
			q: searchQuery,
			page,
			per_page: 10,
		});
	};

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className={classes.root}>
			<Typography variant="h4" component="h5">
				{" "}
				<SearchIcon />
				Search more than <u>{count}</u> users
			</Typography>

			<Grid className={classes.searchBar} container spacing={2}>
				<Grid item xs={10}>
					<TextField
						className={classes.searchBox}
						onChange={handleChange}
						id="filled-basic"
						label="Search GitHub"
						variant="filled"
					/>
				</Grid>
				<Grid item xs={2}>
					<Button
						className={classes.searchButton}
						variant="contained"
						onClick={handleSubmit}
					>
						Search
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default SearchBar;

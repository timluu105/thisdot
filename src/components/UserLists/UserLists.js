import React from "react";
import PageNavButton from "../PageNavButton";
import { useUser } from "../../context/user";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

const UserLists = () => {
	const classes = useStyles();
	const {
		data: { users },
	} = useUser();

	return (
		<div className={classes.root}>
			{users.map((user, index) => {
				return (
					<Paper key={index} spacing={2}>
						{user.avatar_url}
					</Paper>
				);
			})}

			<PageNavButton />
		</div>
	);
};

export default UserLists;

import React, { useEffect } from "react";
import PageNavButton from "../PageNavButton";
import { useUser } from "../../context/user";
import { Button, Typography, Grid, Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	div: {
		padding: theme.spacing(3),
		borderTop: "1px solid black",
		borderBottom: "1px solid black",
	},
	userLink: {
		"color": "blue",

		"&:hover": {
			textDecoration: "underline",
		},
	},
	userDescription: {
		color: "black",
	},
}));

const UserLists = ({ setSearchBtn }) => {
	const classes = useStyles();
	const {
		data: { users, count, userDetails },
		methods: { getUser },
	} = useUser();

	useEffect(() => {
		if (users && users.length !== 0) {
			for (let index = 0; index < 10; index++) {
				if (users[index].login !== "") {
					getUser(users[index].login);
				}
			}
		}
	}, [users]);

	const handleBack = () => {
		setSearchBtn(false);
	};

	return (
		<div className={classes.root}>
			<Grid container direction="row" spacing={1}>
				<Grid container item xs={6} spacing={3}>
					<Typography variant="h4" component="h4">
						<b>{count}</b> respository result
					</Typography>
				</Grid>
				<Grid container item xs={6} spacing={3} justify="flex-end">
					<Button variant="contained" onClick={handleBack}>
						Return
					</Button>
				</Grid>
			</Grid>

			<Box mt={4}>
				{userDetails.map((user, index) => {
					return (
						<div
							className={classes.div}
							onClick={() => {
								window.location = `https://github.com/${user.login}`;
							}}
							key={index}
						>
							<Grid container spacing={3}>
								<Grid item xs={1}>
									<Avatar alt="User Avatar" src={user.avatar_url} />
								</Grid>
								<Grid item xs={11}>
									<Grid container>
										<Grid item xs={3}>
											Name:
											<Typography variant="h6" className={classes.userLink}>
												{user.name}
											</Typography>
											<Grid item xs={6}>
												Followers:
												<Typography variant="h6" className={classes.userLink}>
													{user.followers}
												</Typography>
											</Grid>
											<Grid item xs={6}>
												Following:
												<Typography variant="h6" className={classes.userLink}>
													{user.following}
												</Typography>
											</Grid>
										</Grid>
										<Grid item xs={9}>
											Description:
											<Typography
												variant="h6"
												className={classes.userDescription}
											>
												{user.bio}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</div>
					);
				})}
				<PageNavButton />
			</Box>
		</div>
	);
};

export default UserLists;

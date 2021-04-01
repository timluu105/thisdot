import React from "react";
import { useUser } from "../../context/user";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme();

const PageNavButton = () => {
	const {
		data: { count, searchQuery },
		methods: { getUsers },
	} = useUser();

	const handleClick = (offset) => {
		console.log("page ===> ", offset);

		getUsers({
			q: searchQuery,
			page: offset,
			per_page: 10,
		});
	};

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Pagination
				limit={10}
				total={count}
				currentPageColor="secondary"
				otherPageColor="primary"
				centerRipple={true}
				innerButtonCount
				onClick={(e, offset) => handleClick(offset)}
				reduced
			/>
		</MuiThemeProvider>
	);
};

export default PageNavButton;

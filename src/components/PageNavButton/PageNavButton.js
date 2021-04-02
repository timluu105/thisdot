import React, { useState } from "react";
import { useUser } from "../../context/user";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme();

const PageNavButton = () => {
	const [offset, setOffset] = useState(1);
	const {
		data: { count, searchQuery },
		methods: { getUsers },
	} = useUser();

	const handleClick = (offset) => {
		setOffset(offset);
		getUsers({
			q: searchQuery,
			page: offset / 10 + 1,
			per_page: 10,
		});
	};

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Pagination
				limit={10}
				offset={offset}
				total={count + 1}
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

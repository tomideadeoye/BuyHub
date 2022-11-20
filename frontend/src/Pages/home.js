import { makeStyles } from "@mui/styles";
import { Grid, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axiosCall, { TransactionContext } from "../helpers/axiosCall";
import AvailableBusinesses from "./availableBusinesses";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},

	whiteBoxy: {
		width: "100%",
		padding: "2rem",
		textAlign: "left",

		"& > *": {
			color: "white",
		},
	},

	input: {
		color: "blue",
	},
	businessListBox: {
		padding: "2rem",
		width: "100%",
		background: theme.palette.primary.appGradient,
	},

	itemBox: {
		backgroundColor: theme.palette.primary.light,
		padding: "2rem",
	},
}));

const Home = () => {
	const classes = useStyles();
	const [search, setSearch] = useState("");
	const [businessList, setbusinessList] = useState([]);
	const [userCoordinates, setUserCoordinates] = useState([]);
	const { transactionData, setTransactionData } =
		useContext(TransactionContext);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setUserCoordinates([
					position.coords.latitude,
					position.coords.longitude,
				]);
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	}, []);

	useEffect(() => {
		async function getBusinesses() {
			let response = await axiosCall("/", "POST", {
				coordinates: userCoordinates,
				search: search,
			});
			setbusinessList(response.data);
		}

		getBusinesses();
		setTransactionData({ ...transactionData, item: search });
	}, [search, userCoordinates]);

	return (
		<Stack className={classes.container}>
			<Stack className={classes.whiteBoxy}>
				<Stack
					component="form"
					noValidate
					autoComplete="off"
					sx={{
						backgroundColor: "white",
						padding: "4rem",
					}}
				>
					<TextField
						id="filled-basic"
						label="Search Services and Products"
						variant="filled"
						inputProps={{ className: classes.input }}
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</Stack>
				<Grid
					container
					rowSpacing={2}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					className={classes.businessListBox}
				>
					{businessList.map((business) => {
						return (
							<Grid key={business._id} item xs={12} sm={6} md={4} lg={3}>
								<AvailableBusinesses data={business} />
							</Grid>
						);
					})}
				</Grid>
			</Stack>
		</Stack>
	);
};

export default Home;

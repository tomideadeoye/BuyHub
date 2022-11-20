import React from "react";
import { makeStyles } from "@mui/styles";
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	CssBaseline,
	FormControlLabel,
	Grid,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",

		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	size: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "55px 2px 2px 1px rgba(0, 0, 0, 0.2)",
		borderRadius: "10px",
	},

	paper: {
		margin: theme.spacing(2, 6),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(0),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Login(props) {
	// if (authService.isLoggedIn()) {
	// 	props.history.push("./home");
	// }

	const classes = useStyles();

	const [account, setAccount] = React.useState({ username: "", password: "" });

	const handelAccount = (property, event) => {
		const accountCopy = { ...account };
		accountCopy[property] = event.target.value;

		setAccount(accountCopy);
	};

	const handeLogin = (event) => {
		event.preventDefault();
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid
				className={classes.size}
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={1}
				square
			>
				<Stack className={classes.paper} spacing={3}>
					<Avatar className={classes.avatar}>
						{/* <LockOutlinedIcon /> */}
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							onChange={(event) => handelAccount("username", event)}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoFocus
						/>
						<TextField
							onChange={(event) => handelAccount("password", event)}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>

						<Button
							mt={4}
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handeLogin}
						>
							Sign In
						</Button>
						<Grid
							container
							mt={4}
							sx={{
								justifyContent: "center",
							}}
						>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</Stack>
			</Grid>
		</Grid>
	);
}

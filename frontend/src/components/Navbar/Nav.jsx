import React from "react";
import HeroImg from "../HeroImg/HeroImg";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AnimatedText from "react-animated-text-content";
import { theme } from "../../Colors";

const useStyles = makeStyles((theme) => ({
	navContainer: {
		width: "100%",
		padding: "2rem",
		backgroundColor: "white",
	},

	buttons: {
		"&:hover ": {
			padding: "0.5rem",
			border: "1px solid black",
		},
	},
}));

const Nav = () => {
	const classes = useStyles();
	return (
		<Stack>
			<Stack
				direction="row"
				justifyContent="space-around"
				className={classes.navContainer}
			>
				<HeroImg />
				<Button variant="text" component="label" className={classes.buttons}>
					<a
						href="/login"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						Login
					</a>
				</Button>
			</Stack>
			<Box
				sx={{
					fontSize: "1.7rem",
					color: theme.palette.primary.contrastText,
					background: theme.palette.primary.appGradient,
				}}
			>
				<AnimatedText
					type="words"
					animation={{
						x: "200px",
						y: "-20px",
						scale: 1.1,
						ease: "ease-in-out",
					}}
					animationType="float"
					interval={0.06}
					duration={0.8}
					tag="h2"
					includeWhiteSpaces
					threshold={0.1}
					rootMargin="20%"
				>
					Find services & products online with ease.
				</AnimatedText>
			</Box>
		</Stack>
	);
};

export default Nav;

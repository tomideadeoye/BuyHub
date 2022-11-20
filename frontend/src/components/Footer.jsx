import React from "react";
import HeroImg from "./HeroImg/HeroImg";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import { Box, Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	footer: {
		width: "100%",
		padding: "2rem",
		alignItems: "center",
		justifyContent: "center",
		background: theme.palette.primary.appGradient,
		color: "#ffffff",
		fontSize: "0.9rem",
		borderRadius: "1rem",
		marginTop: "2rem",
		boxShadow: theme.palette.primary.boxShadow,
	},
	footerContent: {
		padding: "1rem",
		textAlign: "left",
	},
}));

const currentYear = new Date().getFullYear();

export const DefaultFooter = () => {
	const classes = useStyles();

	return (
		<Stack
			spacing={4}
			className={classes.footer}
			direction="row"
			divider={<Divider orientation="vertical" flexItem light={true} />}
		>
			<Box
				sx={{
					backgroundColor: "white"
				}}
			>
				<HeroImg />
			</Box>

			<Stack className={classes.footerContent}>
				<p>
					BuyHub is building a P2P marketplace for buyers and sellers. We
					provide consumers direct channels to business owners and we give
					business owners the ability to transact more conveninetly than cash
				</p>
				<p>Copyright © {currentYear}</p>
			</Stack>
		</Stack>
	);
};

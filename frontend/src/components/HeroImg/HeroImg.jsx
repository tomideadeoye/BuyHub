import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import merislabslogo from "../../assets/merislabslogo.png";

const useStyles = makeStyles((theme) => ({
	heroImg: {
		display: "flex",
		cursor: "pointer",
		justifyContent: "center",
		alignItems: "center",
	},

	logo: {
		width: "10rem",
	},
}));

const HeroImg = () => {
	const classes = useStyles();
	return (
		<Link
			to="/"
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<Box
				component={"img"}
				className={classes.logo}
				src={merislabslogo}
				alt="PicAndEdit_logo"
			/>
		</Link>
	);
};

export default HeroImg;

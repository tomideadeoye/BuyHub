import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			light: "#FD841F",
			main: "#E14D2A",
			dark: "#CD104D",
			contrastText: "#fff",
			boxShadow: "55px 2px 2px 1px rgba(0, 0, 0, 0.2)", // .    theme.palette.primary.boxShadow,
			appGradient:
				"linear-gradient(90deg, rgba(17,1,1,1) 0%, rgba(119,5,5,1) 67%, rgba(43,1,1,1) 100%)",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#9C2C77",
			contrastText: "#000",
		},
	},
});

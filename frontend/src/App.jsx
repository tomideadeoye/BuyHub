import React from "react";
import Nav from "./components/Navbar/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import { Stack, ThemeProvider } from "@mui/material";
import { DefaultFooter } from "./components/Footer";
import { theme } from "./Colors";
import Login from "./login";
import { TransactionContextProvider } from "./helpers/axiosCall";
import ServicePurchase from "./Pages/servicePurchase";

export const routes = {
	login: {
		link: "/login",
		component: <Login />,
	},
	home: {
		link: "/",
		component: <Home />,
	},

	ServicePurchase: {
		link: "/service-purchase",
		component: <ServicePurchase />,
	},
};
 
const App = () => {
	return (
		<Stack
			sx={{
				width: "100%",
				overflow: "hidden",
			}}
		>
			{/* <Router> */}
			<ThemeProvider theme={theme}>
				<TransactionContextProvider>
					<Nav />
					<Routes>
						<Route path={routes.login.link} element={<Login />} />
						<Route path={routes.home.link} element={<Home />} />
						<Route
							path={routes.ServicePurchase.link}
							element={<ServicePurchase />}
						/>
					</Routes>

					<DefaultFooter />
				</TransactionContextProvider>
			</ThemeProvider>
			{/* </Router> */}
		</Stack>
	);
};

export default App;

import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import { routes } from "../App";
import { TransactionContext } from "../helpers/axiosCall";
import ItemCard from "./itemCard";

export default function AvailableBusinesses({ data }) {
	const navigate = useNavigate();
	const { setTransactionData } = React.useContext(TransactionContext);
	const handleNewContract = () => {
		setTransactionData({
			business: data,
			business_name:
				data.business_name ||
				data.first_name + " " + data.last_name + " " + "Store",
		});

		navigate(routes.ServicePurchase.link);
	};
	return (
		<Stack>
			<ItemCard data={data} />
			<Button variant="contained" color="primary" onClick={handleNewContract}>
				Contract
			</Button>
		</Stack>
	);
}

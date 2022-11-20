import { Button, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { routes } from "../App";
import axiosCall, { TransactionContext } from "../helpers/axiosCall";
import GoogleMaps from "./GoogleMaps";
import ItemCard from "./itemCard";

export default function ServicePurchase() {
	const { transactionData } = useContext(TransactionContext);

	const navigate = useNavigate();

	function handleBack() {
		navigate(routes.home.link);
	}

	if (transactionData.business === null) {
		handleBack();
	}

	const coordinates = transactionData.business.coordinates
		? transactionData.business.coordinates
		: [0, 0];

	return (
		<Stack>
			<Stack direction="row">
				<ItemCard data={transactionData.business} />
				{coordinates && <GoogleMaps coordinates={coordinates} />}
			</Stack>
			<Cart />
		</Stack>
	);
}

const Cart = () => {
	const [amount, setAmount] = React.useState(0);
	const [payLink, setPayLink] = React.useState(null);

	const { transactionData, setTransactionData } =
		useContext(TransactionContext);

	const handleAmount = async (e) => {
		let response = await axiosCall("/paylink", "POST", {
			business: transactionData.business.business_name,
			item: transactionData.item,
			business_name: transactionData.business_name,
		});
		console.log(response);
		setPayLink(response);

		return response;
	};
	console.log(payLink);

	return (
		<Stack>
			<Button
				variant="contained"
				color="primary"
				onClick={(e) => {
					handleAmount(e);
				}}
			>
				Pay
			</Button>
			{payLink && (
				<iframe
					height="1000vh"
					width="100%"
					src={payLink}
					title="Pay for services here"
					loading="lazy"
				/>
			)}
		</Stack>
	);
};

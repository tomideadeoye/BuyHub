import axios from "axios";
import { createContext, useEffect, useState } from "react";

const baseURl = "http://localhost:4001";

async function axiosCall(url, method, data) {
	let headersList = {
		Accept: "*/*",
	};

	let reqOptions = {
		url: baseURl + url,
		method: method,
		headers: headersList,
		data: data,
	};

	let response = await axios.request(reqOptions);
	return response.data;
}

export const TransactionContext = createContext({});

export const TransactionContextProvider = ({ children }) => {
	const [transactionData, setTransactionData] = useState({
		business: null,
		amount: null,
		coordinates: null,
		paymentLink: null,
	});

	return (
		<TransactionContext.Provider
			value={{
				transactionData,
				setTransactionData,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};

export default axiosCall;

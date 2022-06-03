import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProduct = (endpoint = "product", reqType = "get") => {
	const reqUrl = `https://codeforcareer.dk/wp-json/wp/v2/${endpoint}`;
	const storageKey = endpoint;
	console.log(reqUrl);
	const storageData = localStorage.getItem(storageKey);
	const [data, setData] = useState(
		storageData ? JSON.parse(storageData) : null
	);

	useEffect(() => {
		if (!localStorage.getItem(storageKey)) {
			reqType === "get"
				? axios.get(reqUrl).then((res) => setData(res))
				: axios.post(reqUrl, {});
		}
	}, [endpoint, reqType, reqUrl, storageData]);

	useEffect(() => {
		if (!storageData && data)
			localStorage.setItem(storageKey, JSON.stringify(data));
	}, [data, storageData]);

	return data && data.data;
};

export default useFetchProduct;

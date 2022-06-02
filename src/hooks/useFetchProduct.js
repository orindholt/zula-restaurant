import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProduct = (endpoint = "product", reqType = "get") => {
	const reqUrl = `http://localhost:8012/wordpress/wp-json/wp/v2/${endpoint}`;
	const storageKey = "data";
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

	return data && data.data.sort((a, b) => a.acf.name.localeCompare(b.acf.name));
};

export default useFetchProduct;

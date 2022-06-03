import axios from "axios";
import { useEffect, useState } from "react";

const useDbFetch = (endpoint = "product", reqType = "get") => {
	const reqUrl = `https://codeforcareer.dk/wp-json/wp/v2/${endpoint}`;
	const storageData = localStorage.getItem(endpoint);
	const [data, setData] = useState(
		storageData ? JSON.parse(storageData) : null
	);

	useEffect(() => {
		if (!localStorage.getItem(endpoint)) {
			reqType === "get"
				? axios.get(reqUrl).then((res) => setData(res))
				: axios.post(reqUrl, {});
		} else if (!storageData && data && data.status === 200)
			localStorage.setItem(endpoint, JSON.stringify(data));
	}, [endpoint, reqType, reqUrl, storageData, data]);

	return data && data.data;
};

export default useDbFetch;

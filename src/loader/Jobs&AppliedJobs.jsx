// // import { getStoredCart } from '../utils/fakeDB';

import { useEffect, useState } from "react";

export const jobsAndAppliedJobs = async () => {
	const jobsData = await fetch('/job.json');
	const jobs = await jobsData.json();

	return jobs;
};


export function fetchItemData(id) {
	const [data, setData] = useState([]);

	fetch('job.json')
	.then(res => res.json())
	.then(data => setData(data))
	
	const item = data.find((item) => item.id === id);
	return item;
}

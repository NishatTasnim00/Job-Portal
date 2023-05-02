// use local storage to manage cart data
import toast, { Toaster } from 'react-hot-toast';

const addToDb = (job) => {
	let appliedJobs = [];
	let rawStoredJob = localStorage.getItem('AppliedJobs');
	if (rawStoredJob) {
		let storedJobs = JSON.parse(rawStoredJob);
		if (Array.isArray(storedJobs)) {
			// Check if the job already exists in the array
			if (!storedJobs.some((j) => j.id === job.id)) {
				appliedJobs = [...storedJobs, job];
				toast.success('Apply Successful!');
			} else {
				appliedJobs = [...storedJobs];
				toast.error('You have already applied!');
			}
		} else {
			appliedJobs = [job];
			toast.success('Apply Successful!');
	}
	} else {
		appliedJobs = [job];
		toast.success('Apply Successful!');
	}
	console.log(appliedJobs);
	localStorage.setItem('AppliedJobs', JSON.stringify(appliedJobs));
};


const getAppliedJobs = () => {
	let storedJobs = [];

	//get the shopping cart from local storage
	const storedJob = localStorage.getItem('AppliedJobs');
	if (storedJob) {
		storedJobs = JSON.parse(storedJob);
	}
	return storedJobs;
};

const getOnsiteJobs = () =>{
  const storedJobs = getAppliedJobs()
    const onSiteJobs = storedJobs.filter(job => job.location == "onsite")
    return onSiteJobs
  }
  const getRemoteJobs = () => {
		// const storedJobs = getAppliedJobs();
		// const remoteJobs = storedJobs.filter((job) => job.location == 'remote');
		// return remoteJobs;
    const storedJobs = getAppliedJobs();
		const onSiteJobs = storedJobs.filter((job) => job.location !== 'onsite');
		return onSiteJobs;
	};


export { addToDb, getAppliedJobs, getOnsiteJobs, getRemoteJobs };
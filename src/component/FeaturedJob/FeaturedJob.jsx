import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from './SingleFeaturedJob';

const FeaturedJob = () => {
	const [jobs, setJobs] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch('job.json')
			.then((res) => res.json())
			.then((data) => setJobs(data.slice(0, 4)));
	}, []);

	const handleShowMore = () => {
		setShowMore(true);
		fetch('job.json')
			.then((res) => res.json())
			.then((data) => setJobs(data));
	};

	return (
		<div>
			<div className="text-center mt-16 lg:mx-20">
				<h1 className="text-5xl font-extrabold text-primary">Featured Jobs</h1>
				<p className="text-base font-medium text-neutral py-3">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
				<div className="grid lg:grid-cols-2 gap-4 mx-auto my-5">
					{jobs.map((job) => (
						<SingleFeaturedJob key={job.id} job={job}></SingleFeaturedJob>
					))}
				</div>
				{!showMore && (
					<button onClick={handleShowMore} className="btn-primary">
						See All Jobs
					</button>
				)}
			</div>
		</div>
	);
};

export default FeaturedJob;

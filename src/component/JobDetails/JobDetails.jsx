import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchItemData } from '../../loader/Jobs&AppliedJobs';
import { JobContext } from '../../App';
import { addToDb } from '../../utilities/fakeDB';
import SubBanner from '../SubBanner/SubBanner';

const JobDetails = () => {

    const id = useLoaderData()
    // console.log(id);
const jobs = useContext(JobContext)
console.log(jobs);
const job = jobs.find(item => item.id == id)
// console.log(job);

const handleApply = (job) =>{
	// console.log(job);
	addToDb(job)
}
const {job_description, job_responsibilities, educational_requirements, experience, salary, title, phone, mail, address} = job

    return (
			<>
				<SubBanner>Job Details</SubBanner>
				<div className="flex gap-8 justify-center align-middle p-20">
					<div className="w-4/6 space-y-5 pt-5">
						<p className="text-base font-bold text-primary">
							Job Description:
							<span className="font-medium text-neutral">
								{' '}
								{job_description}
							</span>
						</p>
						<p className="text-base font-bold text-primary">
							Job Responsibility:
							<span className="font-medium text-neutral">
								{' '}
								{job_responsibilities}
							</span>
						</p>
						<p className="text-base font-bold text-primary">
							Educational Requirements:
							<br></br>
							<span className="font-medium text-neutral">
								{educational_requirements}
							</span>
						</p>
						<p className="text-base font-bold text-primary">
							Experiences: <br></br>
							<span className="font-medium text-neutral">
								{experience} years in this field
							</span>
						</p>
					</div>
					<div className="w-2/6 space-y-5">
						<div className="bg-[#F4F1FF] text-lg font-semibold p-8 space-y-3 rounded-lg">
							<h1 className="font-bold">Job Details</h1>
							<hr />
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-[#9478FF] pr-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<h2 className="text-secondary">
									Salary : <span className="text-neutral">{salary}</span>
								</h2>
							</div>
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-[#9478FF] pr-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
									/>
								</svg>

								<h2 className="text-secondary">
									Job Title : <span className="text-neutral">{title}</span>
								</h2>
							</div>
							<h1 className="font-bold">Contact Information</h1>
							<hr />
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-[#9478FF] pr-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>

								<h2 className="text-secondary">
									Phone : <span className="text-neutral">{phone}</span>
								</h2>
							</div>
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-[#9478FF] pr-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>

								<h2 className="text-secondary">
									Email : <span className="text-neutral">{mail}</span>
								</h2>
							</div>
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-8 h-8 text-[#9478FF] pr-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
								<h2 className="text-secondary flex">
									Address:<span className="text-neutral pl-1">{address}</span>
								</h2>
							</div>
						</div>
						<button
							onClick={() => handleApply(job)}
							className="btn-primary w-full"
						>
							Apply Now
						</button>
					</div>
				</div>
			</>
		);
};

export default JobDetails;
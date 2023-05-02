import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const JobAppliedCard = ({ data }) => {
	const {
		id,
		title,
		company,
		logo,
		location,
		job_type,
		office_address,
		salary,
	} = data;

	const navigate = useNavigate();
	const handleNavigation = () => {
		navigate(`../job/${id}`);
	};
	return (
		<div className="w-4/5 text-left border-gray rounded-lg border-2 p-10 flex justify-between mb-3 mx-auto">
			<figure className="my-auto h-[80px] w-[200px]">
				<img src={logo} alt="" />
			</figure>
			<div>
				<h1 className="text-2xl font-bold text-secondary">{title}</h1>
				<h1 className="text-xl font-semibold text-neutral">{company}</h1>
				<div>
					<button className="btn-outlined">
						<span
							style={{
								background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textFillColor: 'transparent',
							}}
						>
							{location}
						</span>
					</button>
					<button className="btn-outlined">
						<span
							style={{
								background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textFillColor: 'transparent',
							}}
						>
							{job_type}
						</span>
					</button>
					<div className="flex gap-5 my-5">
						<p className="text-xl font-semibold text-neutral flex gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 "
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

							{office_address}
						</p>
						<p className="text-xl font-semibold text-neutral flex gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{salary}
						</p>
					</div>
				</div>
			</div>
			<div className="my-auto">
				<button onClick={handleNavigation} className="btn-primary">
					View Details
				</button>
			</div>
		</div>
	);
};

export default JobAppliedCard;

import React, { useEffect, useState } from 'react';
import { getAppliedJobs, getOnsiteJobs, getRemoteJobs } from '../../utilities/fakeDB';
import JobAppliedCard from './JobAppliedCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SubBanner from '../SubBanner/SubBanner';



const JobApplied = () => {
    const[data, setData] = useState([])
	
    useEffect(()=>{
        setData(getAppliedJobs())
    }, [])
    // console.log(data);
	const handleOnsite = () =>{
		setData(getOnsiteJobs())
	}
	const handleRemote = () => {
		setData(getRemoteJobs());
	};

    

    return (
			<>
				<SubBanner>Applied Jobs</SubBanner>
				<div>
					<div className="flex dropdown dropdown-bottom justify-end mr-32 mb-10">
						<label
							tabIndex={0}
							className="btn bg-gray-300 border-none text-black gap-2"
						>
							Filter By
							<FontAwesomeIcon icon={faArrowDown} />
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
						>
							<li>
								<a onClick={() => handleOnsite()}>Onsite</a>
							</li>
							<li>
								<a onClick={() => handleRemote()}>Remote</a>
							</li>
						</ul>
					</div>

					{data.map((data) => (
						<JobAppliedCard key={data.id} data={data}></JobAppliedCard>
					))}
				</div>
			</>
		);
};

export default JobApplied;
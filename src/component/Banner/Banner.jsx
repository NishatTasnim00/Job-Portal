import React from 'react';
import './Banner'
import person from '../../../public/Image/person.png'

const Banner = () => {
    return (
			<div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 bg-[#f9f9ff] -mt-5 lg:mx-0 lg:flex lg:justify-between gap-5">
				<div className="lg:h-[511px] lg:w-[570px] lg:mt-24 pl-5">
					<h1 className="text-7xl font-normal text-primary">
						One Step <br /> Closer To Your <br></br>
						<span
							style={{
								background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textFillColor: 'transparent',
							}}
						>
							Dream Job
						</span>
					</h1>
					<p className="text-lg font-medium text-neutral py-4">
						Explore thousands of job opportunities with all the information you
						need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<button className="btn-primary">Get Started</button>
				</div>
				<figure className='overflow-hidden relative -mb-[18px]'>
                    <img className='lg:-mb-10 object-cover bottom-0' src={person} alt="" />
                </figure>
			</div>
		);
};

export default Banner;
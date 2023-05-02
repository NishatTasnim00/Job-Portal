import React, { children } from 'react';
import vector from '/public/Image/Vector.png';

const SubBanner = ({ children }) => {
    console.log(children);
	return (
		<div className="h-[200px] bg-[#F9F8FF] -mt-5 mb-10 relative">
			<img
				className="absolute bottom-0"
				src={vector}
				alt=""
			/>
			<div className='flex text-4xl font-bold justify-center pt-14'>{children}</div>
            
		</div>
	);
};

export default SubBanner;
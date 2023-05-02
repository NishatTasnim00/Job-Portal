import React from 'react';

const SingleCategory = (props) => {
	// console.log(props);
	const { category, emptyPos, icon } = props.category;
	return (
		<div className="lg:h-[243px] lg:w-[300px] bg-[rgb(251,250,255)] rounded-lg p-10 mb-4 justify-center">
			<img className="h-15 w-15 mb-4" src={icon} alt="" />
			<h1 className="text-xl font-bold text-primary">{category}</h1>
			<p className="text-base font-medium text-neutral">
				{emptyPos} Jobs Available
			</p>
		</div>
	);
};

export default SingleCategory;

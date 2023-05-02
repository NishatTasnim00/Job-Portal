import React from 'react';
const BlogCard = (props) => {
	const { id, ques, ans } = props.qCard;
	// console.log(props.qCard);
	return (
		<div className="lg:p-10">
			<div className="rounded-xl p-5 mb-4 bg-[#f9f9ff] border-2">
				<h1 className="mb-5 font-bold text-[#A25BF7]">
					{id} .{ques}
				</h1>
				<p className="mb-3 text-neutral">
					<span className="font-bold text-[#A25BF7]">Ans : </span>
					{ans}
				</p>
			</div>
		</div>
	);
};

export default BlogCard;

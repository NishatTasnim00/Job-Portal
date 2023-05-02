import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
// console.log(categories);
    return (
			<div className='lg:px-20'>
				<div className="text-center mt-16"> <h1 className="text-5xl font-extrabold text-primary">
						Job Category List
					</h1>
					<p className="text-base font-medium text-neutral py-3">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className="lg:flex gap-5 my-8 lg:justify-center mx-auto mt-20">
					{categories.map((category) => (
						<SingleCategory
							key={category.id}
							category={category}
						></SingleCategory>
					))}
				</div>
			</div>
		);
};

export default JobCategory;
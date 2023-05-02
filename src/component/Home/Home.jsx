import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Banner from '../Banner/Banner';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {

    
    return (
        <div>
            <Banner></Banner>
           <JobCategory></JobCategory> 
           <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;
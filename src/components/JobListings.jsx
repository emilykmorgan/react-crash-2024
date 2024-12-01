import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {
    const recentJobs = jobs.slice(0, 3);

    return (
        <div>
            {recentJobs.map((job) => <JobListing key={job.id} job={job}/>)}
        </div>
    );
}

export default JobListings
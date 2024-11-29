import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {
    return (
        <div>
            {jobs.map((job) => <JobListing key={job.id} job={job}/>)}
        </div>
    );
}

export default JobListings
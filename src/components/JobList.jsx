import JobCard from './JobCard'

const JobList = ({ jobs, onUpdateStatus, onDeleteJob}) => {
  return (
    <div className="space-y-4">
    {jobs.map((job) => (
      <JobCard key={job._id} job={job} onUpdateStatus={onUpdateStatus} onDeleteJob={onDeleteJob} />
    ))}
  </div>
  )
}

export default JobList

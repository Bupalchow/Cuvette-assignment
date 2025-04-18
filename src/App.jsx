import { useState, useEffect } from 'react'

import JobForm from './components/JobForm'
import FilterBar from './components/FilterBar'
import JobList from './components/JobList'

const App=()=>{
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [loading,setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState("All")
  const [sortByDate, setSortByDate] = useState(false)

  const API_BASE_URL = import.meta.env.VITE_API_URL
  //fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs`)
        const data = await response.json()
        setJobs(data)
        setFilteredJobs(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching jobs:", error)
        setLoading(false)
      }
    }

    fetchJobs()
  }, [API_BASE_URL])

  //filter jobs
  useEffect(() => {
    let result = [...jobs];
    if (statusFilter !== "All") {
      result = result.filter((job) => job.Status === statusFilter);
    }
    if (sortByDate) {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredJobs(result);
  }, [statusFilter, sortByDate, jobs]);

  const addJob = async (newJob) => {
    try {
      const response = await fetch(`${API_BASE_URL}/add-job`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      })
      const data = await response.json()
      setJobs([...jobs, data])
    } catch (error) {
      console.error("Error adding job:", error)
    }
  }

  const updateJobStatus = async (id, newStatus) => {
    try {
      await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Status: newStatus }),
      })
      setJobs(jobs.map((job) => (job._id === id ? { ...job, Status: newStatus } : job)))
    } catch (error) {
      console.error("Error updating job:", error)
    }
  }

  const deleteJob = async(id)=>{
    try{
      await fetch(`${API_BASE_URL}/jobs/${id}`,{
        method:"DELETE"
      })
      setJobs(jobs.filter((job) => job._id !== id))
    }catch(error){
      console.error('Error deleting job:',error)
    }
  }


  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Student Job Tracker</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Job Application</h2>
        <JobForm onAddJob={addJob} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Job Applications</h2>
          <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} sortByDate={sortByDate} setSortByDate={setSortByDate} />
        </div>

        {loading ? (
          <p className="text-center py-4">Loading jobs...</p>
        ) : filteredJobs.length > 0 ? (
          <JobList jobs={filteredJobs} onUpdateStatus={updateJobStatus} onDeleteJob={deleteJob} />
        ) : (
          <p className="text-center py-4">No job applications found.</p>
        )}
      </div>
    </main>
    </>
  )
}

export default App;
import {useState} from 'react'

const JobCard = ({job, onUpdateStatus, onDeleteJob}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-yellow-100 text-yellow-800"
      case "Interview":
        return "bg-blue-100 text-blue-800"
      case "Offer":
        return "bg-green-100 text-green-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }


  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 cursor-pointer flex justify-between items-center" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <h3 className="font-medium">{job.CompanyName}</h3>
          <p className="text-sm text-gray-600">{job.Role}</p>
        </div>

        <div className="flex items-center space-x-3">
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(job.Status)}`}>{job.Status}</span>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
          >
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-gray-50 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Application Date</p>
              <p>{formatDate(job.date)}</p>
            </div>

            {job.link && (
              <div>
                <p className="text-sm text-gray-500">Job Link</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline truncate block"
                >
                  {job.link}
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <select
              value={job.Status}
              onChange={(e) => onUpdateStatus(job._id, e.target.value)}
              className="p-1 text-sm border rounded"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button
              onClick={() => onDeleteJob(job._id)}
              className="bg-red-100 text-red-600 hover:bg-red-200 text-sm px-3 py-1 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default JobCard

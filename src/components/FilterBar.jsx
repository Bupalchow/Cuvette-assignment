
const FilterBar = ({ statusFilter, setStatusFilter }) => {
  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"]
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Filter:</span>
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              statusFilter === status ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar


const FilterBar = ({ statusFilter, setStatusFilter,sortByDate, setSortByDate }) => {
  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"]
  return (
    <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setStatusFilter(status)}
          className={`text-xs px-3 py-1 rounded-full ${
            statusFilter === status ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
    <button
      onClick={() => setSortByDate(!sortByDate)}
      className={`text-xs px-3 py-1 rounded-full self-start ${
        sortByDate ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {sortByDate ? "Latest First ↓" : "Sort by Date"}
    </button>
  </div>
  )
}

export default FilterBar

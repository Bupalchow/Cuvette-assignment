import {useState} from 'react'

const JobForm = ({ onAddJob }) => {
  const formatDateForInput = (date) => {
    return date.toISOString().split('T')[0];
  }
  const today = formatDateForInput(new Date());

  const [formData, setFormData] = useState({
    CompanyName: "",
    Role: "",
    Status: "Applied",
    date: today,
    link: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddJob(formData)
    setFormData({
      CompanyName: "",
      Role: "",
      Status: "Applied",
      date: today,
      link: "",
    })
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="CompanyName" className="block text-sm font-medium mb-1">
            Company
          </label>
          <input
            type="text"
            id="CompanyName"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="Role" className="block text-sm font-medium mb-1">
            Role
          </label>
          <input
            type="text"
            id="Role"
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="Status" className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Application Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium mb-1">
          Job Link
        </label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://example.com/job"
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        Add Job Application
      </button>
    </form>
  )
}

export default JobForm

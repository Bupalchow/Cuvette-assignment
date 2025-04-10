import mongoose  from 'mongoose';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config(); 

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection failed:', error));

const JobSchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    Status:{
        type: String,
        required: true,
        enum: ['Applied', 'Interview', 'Offer', 'Rejected']
    },
    date: {
        type: Date,
        default: Date.now,
    },
    link:{
        type:String,
        required:true,
    }
});
const Job = mongoose.model('jobs', JobSchema);
Job.createIndexes();


const app = express();
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Server is up");
});

app.post("/add-job", async (req, res) => {
    try {
        const job = new Job(req.body);
        let result = await job.save();
        res.status(201).json(result); 
    } catch (e) {
        res.status(400).json({ error: e.message });  
    }
});

app.get("/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        console.error("Error retrieving jobs:", err);
        res.status(500).json({ message: "Failed to retrieve jobs", error: err.message });
    }
});

app.put("/jobs/:id", async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedJob) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json(updatedJob);
    } catch (err) {
        console.error("Error updating job:", err);
        res.status(500).json({ message: "Failed to update job", error: err.message });
    }
});

app.delete("/jobs/:id", async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted successfully", job: deletedJob });
    } catch (err) {
        console.error("Error deleting job:", err);
        res.status(500).json({ message: "Failed to delete job", error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({ 
    title: { 
        type: String, 
        required: true
    }, 
    description: { 
        type: String, 
        required: true
    },  
    // array for storing skills 
    requirements: [{ 
        type: String
    }],
    experience:{ 
        type: Number, 
        required: true
    } , 
    salary: { 
        type: String, 
        required: true
    }, 
    location: { 
        type: String, 
        required: true
    }, 
    jobType: { 
        type: String, 
        required: true
    }, 
    position: { 

        type: String, 
        required: true
    } , 
    company: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Company', 
        required: true
    } , 
    created_by: { 
        
        type: String, 
        required: true
    }, 
    applications: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Application'
    }]
},{timestamps: true}) 
export const Job = mongoose.model("Job", JobSchema); 

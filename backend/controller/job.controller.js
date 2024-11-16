import express from 'express' 
import { Job } from '../models/Jobmodel.js';


// recruiter / admin
export const PostJob = async (req,res)=>{ 
    try {
        const{title, description, requirements,salary, location, jobtype, experience, position, companyId} = req.body;  
        const userId = req.id; 
        if(!title|| !description|| !requirements || !salary || !location || !jobtype|| !experience ||  !experiencexperience || !position || !companyId) { 
            return res.status(400).json({ 
                message:"something is missing ", 

            })
        } 

        const job = await Job.create({ 
            title, 
            description,
            requirements: requirements.split(','), 
            salary: Number(salary), 
            location, 
            jobtype,  
            experience, 
            company: companyId, 
            created_by: userId

        }); 
         
        return res.status(200).json({
            message: 'new job created successfully', 
            job
        })

        
    } catch (error) {
        console.log(error);    

    }
}

// user / student 
export const getAllJobs = async (req,res) =>{ 
    try {
        const keyword = req.query.keyword  || ""; 
        const query = { 
            $or: [
                {title:{$regex: keyword, $options: "i"}},
                {description:{$regex: keyword, $options: "i"}}

            ]
        }; 

        const jobs = await Job.find(query); 
        if(!jobs) {
            return res.status(200).json({
                message: "Job not found"
            })
        }

        return res.status(200).json({ 
            jobs
        })


    } catch (error) {
        console.log(error)
    }
}


//user / student 
// find by id JOBS 
export const getJobById = async (req,res) =>{ 
    try {
        const jobid = req.params.id; 
        const job = await Job.findById(jobid); 
        if(!job) { 
            return res.status(403).json({
                message: "job not found"
            })
        }

        return res.status(200).json({ 
            job, 
        })
    } catch (error) {
        console.log(error); 
    }
}

export const getAdminJobs = async (req,res) =>{ 
    try {
        const adminId =req.id; 
        const jobs = await Job.find({created_by: adminId})

        if(!jobs) { 
            return res.status(403).json({
                message: "jobs not found"
            });

        }

        return res.status(200).json({ 
            jobs, 
    
        })
    } catch (error) {
        console.log(error)
    }
}
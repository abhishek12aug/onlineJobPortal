import express from 'express' 
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, PostJob } from '../controller/job.controller.js';
const router = express.Router(); 

router.post('/postjob', isAuthenticated,PostJob);  
router.get('/get', isAuthenticated, getAllJobs); 
router.get('/getadminjobs', isAuthenticated, getAdminJobs); 
router.get('/get/:id',isAuthenticated, getJobById); 

export default router; 

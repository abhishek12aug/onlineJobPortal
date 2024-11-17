import express from 'express' 
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controller/application.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router(); 

router.get('/applyjob/:id', isAuthenticated,applyJob);
router.get('/get', isAuthenticated,getAppliedJobs); 
router.get('/:id/applicants', isAuthenticated,getApplicants); 
router.post('/status/:id/update', isAuthenticated,updateStatus); 


export default router;  
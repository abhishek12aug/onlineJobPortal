import express from 'express' 

import userRouter from './user.routes.js';
import companyRouter from './company.routes.js';  
import jobRouter from './job.route.js'
const router = express.Router(); 
router.use('/user', userRouter);  
router.use('/company', companyRouter); 
router.use('/job', jobRouter);  

export default router; 

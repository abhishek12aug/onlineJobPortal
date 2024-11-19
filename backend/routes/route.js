import express from 'express' 

import userRouter from './user.routes.js';
import companyRouter from './company.routes.js';  
import jobRouter from './job.route.js';
import applicationRouter from './application.routes.js';
const router = express.Router(); 
router.use('/user', userRouter);  
router.use('/company', companyRouter); 
router.use('/job', jobRouter);  
router.use('/application',applicationRouter);

export default router; 
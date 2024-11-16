import express from 'express' 
import { GetCompanies, GetCompanybyId, RegisterCompany, UpdateCompany } from '../controller/company.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router= express.Router(); 

router.post('/register', isAuthenticated,RegisterCompany); 
router.get('/get',isAuthenticated, GetCompanies); 
router.get('/get/:id',isAuthenticated, GetCompanybyId); 
router.put('/update/:id',isAuthenticated, UpdateCompany); 

export default router; 

import express from 'express'   
import { register, login, updateUserProfile, logout } from '../controller/usercontroller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router(); 

router.post('/register', register);  
router.post('/login', login); 
router.post("/profile/update",isAuthenticated , updateUserProfile);   
router.get('/logout', isAuthenticated, logout)

export default router; 

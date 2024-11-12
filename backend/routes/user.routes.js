import express from 'express'   
import { register, login, updateUserProfile } from '../controller/usercontroller';

const router = express.Router(); 

router.post('/register', register);  
router.post('/login', login); 
router.post("/profile/update", updateUserProfile);  


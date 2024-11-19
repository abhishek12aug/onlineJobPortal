import express from 'express'    
import cookieParser from 'cookie-parser'; // for passing the token stored inside user browser via our frontend 
import cors from 'cors' ;  
import dotenv from 'dotenv';  
import connectDB from './utils/db.js'
import rootRouter from './routes/route.js'

dotenv.config({}); 

const app = express ();  
app.use(cors());  
app.use(express.urlencoded({extended: true})); 
app.use(express.json()) ; 
app.use(cookieParser());  
app.use("/api/v1", rootRouter); //handle all the routes 

const PORT = process.env.PORT || 3000  



app.listen(PORT, (req,res)=>{  
    connectDB(); 
    console.log(`server is running on port ${3000}`); 
}) 


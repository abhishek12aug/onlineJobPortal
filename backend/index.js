import express from 'express'    
import cookieParser from 'cookie-parser'; // for passing the token stored inside user browser via our frontend 
import cors from 'cors' ;  

const app = express ();  

app.use(cors());  
app.use(express.json()) ; 
app.use(cookieParser());  



app.listen(3000, (req,res)=>{ 
    console.log(`server is running on port ${3000}`); 
}) 

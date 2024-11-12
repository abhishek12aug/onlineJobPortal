import jwt from 'jsonwebtoken';

const isAuthenticated = async (req,res) =>{ 
    try {
        const token = req.cookie.token; 
        if(!token) { 
            return res.status(401).json({ 
                message: "authorization failed",  
                success: false
            }) 
        } 

        const decode = jwt.verify(token, process.env.SECRET_KEY); 
        //if not decoded
        if(!decode) { 
            return res.status(401).json({ 
                message: "invalid token",  
                success: false
            }) 
        }    

        // storing userId
        req.id = decode.userId; 
        next(); 

    } catch (error) {
        console.log(error); 
    }
}
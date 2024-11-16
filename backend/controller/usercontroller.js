import { User } from "../models/Usermodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



// I'll use zod for input validation later. 
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {

            return res.status(400).json({
                message: "something is missing ",
                success: false
            });

        }

        // checking the user in db  with certain email exists or not! 
        const user = await User.findOne({
            email: req.body.email
        });
        if (user) {
            return res.status(400).json({
                message: "user already exists!",
                success: false
            })
        }


        //converting password to hash using bcrypt  
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating User 
        await User.create({
            fullname: fullname,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword,
            role: role
        })

        res.json({
            mesage: "user created successfully",
            success: true
        })


    } catch (error) {

        console.log(error)
    }

}


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                mesage: "something is missing",
                success: false
            })
        }


        // user exist's or not 
        let user = await User.findOne({
            email: email

        })
        if (!user) {
            return res.status(400).json({
                message: "user doesn't exist / wrong credentials",
                success: false
            })
        }

        // hash matching for password using bcrypt 
        const passwordmatch = await bcrypt.compare(password, user.password)
        if (!passwordmatch) {
            return res.status(400).json({
                message: "user doesn't exist / wrong credentials",
                success: false
            })
        }


        // check user role is correct or not ?  
        if (role !== user.role) {
            return res.status(400).json({
                message: "account doesn't exist with current role",
                success: false
            })
        }

        // jwt token generate using userId  
        const tokendata = {
            userId: user._id
        }
        const token = jwt.sign(tokendata, process.env.SECRET_KEY);
        // we also need to store token cookie/storage 
        // upon login for returning the user 
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }



        return res.status(200)
            //token is stored inside a cookie  which will expire after 24hrs or one day. 
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            });


    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try {
        // clearing token after logout 
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            mesage: "logged out successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


export const updateUserProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
    
        // cloudinary part here ....... 





        // since skills is string --> we need to convert it into an array 
        let skillsArray; 
        if(skills){
            skillsArray = skills.split(","); 
        }
        
        const userId = req.id; // middleware authentication  

        let user = User.findById(userId);
        if (!user) {
            return res.status(400).json({
                mesage: "user not found",
                success: false
            })
        }

        // updating user data  
        // user.fullname = fullname,
        //     user.email = email,
        //     user.phoneNumber = phoneNumber,
        //     user.profile.bio = bio,
        //     user.profile.skills = skillsArray

        // updating user data based on details  
        if(fullname) user.fullname = fullname; 
        if(email) user.email = email; 
        if(phoneNumber) user.phoneNumber = phoneNumber; 
        if(bio) user.profile.bio = bio; 
        if(skills) user.profile.skills = skillsArray
        // user resume will do later .... 


        //returning details of the user 
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({ 
            message: "profile updated successfully", 
            user, 
            success: true 

        })

    } catch (error) {
        console.log(error);

    }
}

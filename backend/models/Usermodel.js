import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    fullname: { 
        type: String, 
        require: true
    }, 
    email: { 
        type: String, 
        required: true, 
        unique:true //email should be unique 
    },  
    phoneNumber: { 
        type: String, 
        required: true
    } ,
    password: { 
        type: String, 
        required: true
    }, 
    role: { 
        type: String, 
        role: ['student', 'recruiter'], 
        required: true
    } , 
    profile: { 
        bio: { 
            type: String,  
        } ,
        skills:[{ 
            type: String
        }] ,  

        // URL to resume file  
        resume: {  
            type: String, 

        },  
        // .pdf like name 
        resumeOriginalName: { 
            type: String 
        } ,  
        // relation btw user and company table 
        company: {  

            type: mongoose.Schema.Types.ObjectId, ref:'Company'
        }, 
        profilePhoto: { 
            type: String ,  
            default: ""
        }
    },
}, {timestamps: true});

export const User = mongoose.model('User', UserSchema);  

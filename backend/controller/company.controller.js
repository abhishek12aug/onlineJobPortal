import { Company } from "../models/Companymodel.js";
export const RegisterCompany = async (req,res)=>{ 

    try {
        const{companyname} =req.body; 
        if(!companyname) {
            return res.status(400).json({ 
                messag:"company name required !" 
            })
        } 

        const findcompany = await  Company.findOne({ 
            name: companyname 

        }) 
        if(findcompany) { 
            return res.status(400).json({
                message: "company already exists! "
            })
        } 


        const company = await Company.create({
            name: companyname, 
            userId: req.id
            

            // these are optional as per company model  
            // description,
            // website, 
            // logo, 
        })  

        return res.status(201).json({ 
            message: "company registered successfully", 
            Company: company
        })

        
        

        
    } catch (error) {
        console.log(error); 
    } 
}


// get all companies by user 
export const GetCompanies = async (req,res) => { 
    try {
        const userId =req.id; // loggedIn user id 
        const companies = await Company.find({ 
            userId
        }); 
        if(!companies) { 
            return res.status(404).json({ 
                message: "companies not found", 
                success: false
            })
        } 

        return res.status(200).json({ 
            companies 

        })
    } catch (error) {
        console.log(error)
    }
}


// get company by id 
export const GetCompanybyId = async (req,res) =>{ 
    try {
        const companyId = req.params.id;  
        const company = await Company.findById(companyId);   
        if(!company) { 
            return res.status(404).json({ 
                message: "company not found", 
                success: false
            })
        }

        return res.status(200).json({ 
            company

        })
    } catch (error) {
        console.log(error)
    }   
} 


export const UpdateCompany = async(req,res) =>  { 
    try {
        const {name, description, website, location } = req.body;
        const file = req.file ; // for updating logo of company 
        
        // cloudinary pending ... 


        const updatedata = {name, description, website, location }; 
        console.log("hello ")

        const company = await Company.findByIdAndUpdate(
            req.params.id, updatedata, {new: true}
        );  
        console.log("hello ")
        if(!company) { 
            return res.status(400).json({
                message: "company not found", 
                success: false
            })
        } 
        console.log("hello ")

        return res.status(200).json({ 
            message: "company updated successfully", 
            success: true
        })



    } catch (error) {
        console.log(error) 
    }
}
 
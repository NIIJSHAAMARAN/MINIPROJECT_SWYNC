
import User from "../model/userSchema"



export const register= async(req,res)=>{

    
}


export const login=async(req,res)=>{

    try {
        const { name, email } = req.body;
    
        // Create a new user instance
        const newUser = new User({
          name: name,
          email: email
        });
    
        // Save the user to the database
        const savedUser = await newUser.save();

        console.log(savedUser)
    
        res.status(201).json(savedUser); // Return the saved user object
      } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Failed to save user" });
      }


}



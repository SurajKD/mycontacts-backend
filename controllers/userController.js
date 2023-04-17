const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const bcrypt =require("bcrypt")
//@desc register a user
//@routes Post /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    const{username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400)
        throw new Error("User Already Registered");
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password,10)
    console.log("Hashed Password:",hashedPassword)
    res.json({message:"Register"})
});
//@desc login a user
//@routes POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"Login"})
});
//@desc login a user
//@routes GET /api/users/current
//@access public
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"current"})
});

module.exports = {
    registerUser,
    loginUser,
    currentUser,
};

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:{true,"username is already taken"},
        required: true,
    },
    email:{
        type:String,
        unique:[true,"Account Alraedy exist"]
        required:true,
    },
    password:{
        type: String , 
        requirede:true
    }
})
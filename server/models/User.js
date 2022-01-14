const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type : String,
        required : true
    },
    email: {
       type: String,
       required : true,
       unique : true 
    },
    password: {
        type: String,
        required : true
    },
    skills: {
        type: String,
        
    },
    topics: {
        type: String,
        
    },
    projects: {
        type: String,
        
    },
    posts: {
        type: String,
        
    },
    following: {
        type: String,
        
    }
    
});

const appuser = mongoose.model("appuser", userSchema);
module.exports = appuser;
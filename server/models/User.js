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
        required : true
    },
    topics: {
        type: String,
        required : true
    },
    projects: {
        type: String,
        required : true
    },
    posts: {
        type: String,
        required : true
    },
    following: {
        type: String,
        required : true
    }
    
});

    mongoose.model("appuser", userSchema);
    module.exports = mongoose.model("appuser");
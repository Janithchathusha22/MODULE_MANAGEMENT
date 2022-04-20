const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchema = new mongoose.Schema({

        Name :{
            type : String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        course:{
            type : String ,
            required:true
        },
        ModuleName:{
            type : String ,
            required:true
        },
        ModuleId:{
            type : String ,
            required:true
        },
        ModuleDate:{
            type : String ,
            required:true
        },
        

});

module.exports = mongoose.model('Posts',postSchema)

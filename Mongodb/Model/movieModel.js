const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'name is required field'],
        unique:true
        },
    description:{
        type:String,
        require:[true,'description is required field']
    },
    duration:{
        type:Number,
        require:[true,'duration is required field']
    },
    rating:{
        type:Number
    }
})

const movieModel = mongoose.model('movie',movieSchema);
module.exports=movieModel;
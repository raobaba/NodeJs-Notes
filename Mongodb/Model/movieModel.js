const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'This is required field'],
        unique:true
        },
    description:{
        type:String,
        require:[true,'This is required field']
    },
    duration:{
        type:Number,
        require:[true,'This is required field']
    },
    rating:{
        type:Number
    }
})

const movieModel = mongoose.model('movie',movieSchema);
module.exports=movieModel;
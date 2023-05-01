const mongoose =require('mongoose');


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
        },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    rating:{
        type:Number
    }
})

const movieModel = mongoose.model('movie',movieSchema);
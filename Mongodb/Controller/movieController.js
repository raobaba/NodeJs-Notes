const fs = require('fs');


const validateBody = (req,res,next)=>{
    if(!req.body.name||!req.body.releaseYear||!req.body.duration){
        res.status(400).json({
            status:'failed',
            message:'Not a valid movie data'
        })
    }
}

const getMovies = (req, res) => {

}
const getMoviesById = (req, res) => {

}
const postMovies = (req, res) => {

}
const patchMovies = (req, res) => {

}
const deleteMovies = (req, res) => {

}
module.exports = { getMovies, getMoviesById, postMovies, patchMovies, deleteMovies,validateBody }
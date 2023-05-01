const movieModel = require('../Model/movieModel.js');

const getMovies = (req, res) => {

}
const getMoviesById = (req, res) => {

}
const postMovies = async (req, res) => {
    const body = req.body;
      try {
        const newMovie = new movieModel(body);
        await newMovie.save();
        res.status(201).json({
            status:'success',
            data:{
                movie:newMovie
            }
        })
      } catch (error) {
        res.status(400).json({
            status:'failed',
            message:error.message
        })
      }
}
const patchMovies = (req, res) => {

}
const deleteMovies = (req, res) => {

}
module.exports = { getMovies, getMoviesById, postMovies, patchMovies, deleteMovies }
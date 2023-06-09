const movieModel = require('../Model/movieModel.js');

const getMovies = async (req, res) => {
    try {
        console.log(req.query);
        const movie = await movieModel.find(req.query);
        res.status(200).json({
            status: 'success',
            length: movie.length,
            data: {
                movie: movie
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
const getMoviesById = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                movie: movie
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
const postMovies = async (req, res) => {
    const body = req.body;
    try {
        const newMovie = new movieModel(body);
        await newMovie.save();
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
const patchMovies = async (req, res) => {
    try {
        const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: "success",
            data: {
                movie: updatedMovie
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
const deleteMovies = async (req, res) => {
    try {
        await movieModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data: `Movie name ${req.body.name} is successfully deleted`
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports = { getMovies, getMoviesById, postMovies, patchMovies, deleteMovies }
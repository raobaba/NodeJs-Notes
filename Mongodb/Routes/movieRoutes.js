const {
    getMovies,
    getMoviesById,
    postMovies,
    patchMovies,
    deleteMovies
} = require('../Controller/movieController')
const express = require('express');
const Router = express.Router();
Router.route('/')
    .get(getMovies)
    .post(postMovies);
Router.route('/:id')
    .get(getMoviesById)
    .patch(patchMovies)
    .delete(deleteMovies);
module.exports = Router;
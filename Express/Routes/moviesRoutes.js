const express = require('express');
const Router = express.Router();
const {
    getMovies,
    getMoviesById,
    postMovies,
    patchMovies,
    deleteMovies
} = require('../Controller/movies-controller')
Router.route('/')
    .get(getMovies)
    .post(postMovies);

Router.route('/:id')
    .get(getMoviesById)
    .patch(patchMovies)
    .delete(deleteMovies);
module.exports = Router;
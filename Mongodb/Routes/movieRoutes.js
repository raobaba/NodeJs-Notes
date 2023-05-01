const {
    getMovies,
    getMoviesById,
    postMovies,
    patchMovies,
    deleteMovies,
    validateBody
} = require('../Controller/movieController')
const express = require('express');
const Router = express.Router();
Router.route('/')
    .get(getMovies)
    .post(validateBody,postMovies);
Router.route('/:id')
    .get(getMoviesById)
    .patch(patchMovies)
    .delete(deleteMovies);
module.exports = Router;
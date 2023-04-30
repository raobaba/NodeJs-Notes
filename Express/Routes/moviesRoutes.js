const {
    getMovies,
    getMoviesById,
    postMovies,
    patchMovies,
    deleteMovies,
    checkId
} = require('../Controller/movies-controller')
const express = require('express');
const Router = express.Router();
Router.param('id', checkId)
Router.route('/')
    .get(getMovies)
    .post(postMovies);
Router.route('/:id')
    .get(getMoviesById)
    .patch(patchMovies)
    .delete(deleteMovies);
module.exports = Router;
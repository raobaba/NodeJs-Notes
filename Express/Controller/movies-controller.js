const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./Movies.json'));
const validateBody = (req,res,next)=>{
    if(!req.body.name||!req.body.releaseYear||!req.body.duration){
        res.status(400).json({
            status:'failed',
            message:'Not a valid movie data'
        })
    }
}
const checkId = (req,res,next,value)=>{
    console.log('Movie ID is '+ value);
    let movie = movies.find(el => el.id === value*1);
    console.log(movie)
    if (!movie) {
        return res.status(404).json({
            status: 'failed',
            message: `Movie with the ID ${value} is not Found`
        })
    }
    next();
}
const getMovies = (req, res) => {
    res.status(200).json({
        status: "success",
        count: movies.length,
        data: {
            movies: movies
        }
    })
}
const getMoviesById = (req, res) => {
    const id = req.params.id * 1;
     let movie = movies.find(el => el.id === id);
    // if (!movie) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: `Movie with the ID ${id} is not Found`
    //     })
    // }
    res.status(200).json({
        status: 'success',
        data: {
            movie: movie
        }
    })
}
const postMovies = (req, res) => {
    const newId = movies[movies.length - 1].id + 1;
    let newMovie = Object.assign({ id: newId }, req.body);
    movies.push(newMovie);
    fs.writeFile('./Movies.json', JSON.stringify(movies), (err, data) => {
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        })
    })
}
const patchMovies = (req, res) => {
    const id = req.params.id * 1;
    let movieToUpdate = movies.find(el => el.id === id);
    // if (!movieToUpdate) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: `Movie with the ID ${id} is not Found`
    //     })
    // }
    const index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate, req.body);
    movies[index] = movieToUpdate;
    fs.writeFile('./Movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: 'success',
            data: {
                movie: movieToUpdate
            }
        })
    })
}
const deleteMovies = (req, res) => {
    const id = req.params.id * 1;
    let movieToDelete = movies.find(el => el.id === id);
    // if (!movieToDelete) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: `Movie with the ID ${id} is not Found`
    //     })
    // }
    const index = movies.indexOf(movieToDelete);
    movies.splice(index, 1);
    fs.writeFile('./Movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'success',
            data: {
                movie: `Item with ID ${id} is successfully deleted`
            }
        })
    })
}
module.exports = { getMovies, getMoviesById, postMovies, patchMovies, deleteMovies,checkId,validateBody }
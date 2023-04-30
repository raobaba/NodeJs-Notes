const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('tiny'));
const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./Movies.json'));
const getMovies = (req,res)=>{
    res.status(200).json({
        status:"success",
        count:movies.length,
        data:{
            movies:movies
        }
    })
}
const getMoviesById = (req,res)=>{
    const id = req.params.id*1;
    const movie = movies.find(el=>el.id===id);
    if(!movie){
     return res.status(404).json({
         status:'failed',
         message:`Movie with the ID ${id} is not Found`
     })
    }
    res.status(200).json({
     status:'success',
     data:{
         movie:movie
     }
    })
 }
 const postMovies = (req,res)=>{
    const newId = movies[movies.length-1].id+1;
    const newMovie = Object.assign({id:newId},req.body);
    movies.push(newMovie);
    fs.writeFile('./Movies.json',JSON.stringify(movies),(err,data)=>{
        res.status(201).json({
            status:'success',
            data:{
                movie:newMovie
            }
        })
    })
}
const patchMovies = (req,res)=>{
    const id = req.params.id*1;
    const movieToUpdate = movies.find(el=>el.id===id);
    if(!movieToUpdate){
        return res.status(404).json({
            status:'failed',
            message:`Movie with the ID ${id} is not Found`
        })
       }
    const index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate,req.body);
    movies[index] = movieToUpdate;
    fs.writeFile('./Movies.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:'success',
            data:{
                movie:movieToUpdate
            }
        })
    })
}
const deleteMovies = (req,res)=>{
    const id = req.params.id*1;
    const movieToDelete = movies.find(el=>el.id===id);
    if(!movieToDelete){
        return res.status(404).json({
            status:'failed',
            message:`Movie with the ID ${id} is not Found`
        })
       }
    const index = movies.indexOf(movieToDelete);
    movies.splice(index,1);
    fs.writeFile('./Movies.json',JSON.stringify(movies),(err)=>{
        res.status(204).json({
            status:'success',
            data:{
                movie:`Item with ID ${id} is successfully deleted`
            }
        })
    })
}
// app.get('/api/v1/movies',getMovies)
// app.get('/api/v1/movies/:id',getMoviesById)
// app.post('/api/v1/movies',postMovies)
// app.patch('/api/v1/movies/:id',patchMovies)
// app.delete('/api/v1/movies/:id',deleteMovies)


app.route('/api/v1/movies')
.get(getMovies)
.post(postMovies);

app.route('/api/v1/movies/:id')
.get(getMoviesById)
.patch(patchMovies)
.delete(deleteMovies);

app.listen(3000,()=>{
    console.log('Server has Started...');
})
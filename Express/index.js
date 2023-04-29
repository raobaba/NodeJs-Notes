const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./Movies.json'));
//movies GET api/v1/movies
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status:"success",
        count:movies.length,
        data:{
            movies:movies
        }
    })
})
//movies GET by ID /api/v1/movies/:id
app.get('/api/v1/movies/:id',(req,res)=>{
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
})
app.post('/api/v1/movies',(req,res)=>{
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
})

app.listen(3000,()=>{
    console.log('Server has Started...');
})
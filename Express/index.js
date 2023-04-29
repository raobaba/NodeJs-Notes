const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./Movies.json'));

app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status:"success",
        count:movies.length,
        data:{
            movies:movies
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
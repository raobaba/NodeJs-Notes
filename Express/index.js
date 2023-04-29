const express = require('express');
const app = express();
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

app.listen(3000,()=>{
    console.log('Server has Started...');
})
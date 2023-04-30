const express = require('express');
const app = express();
const Router = require('./Routes/moviesRoutes');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/v1/movies',Router)
app.listen(3000,()=>{
    console.log('Server has Started...');
})
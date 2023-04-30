const express = require('express');
const app = express();
require('dotenv').config();
const Router = require('./Routes/moviesRoutes');
const morgan = require('morgan');
console.log(app.get('env'))
app.use(express.json());
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
app.use(express.static('./Public'));
app.use('/api/v1/movies',Router)
app.listen(process.env.PORT,()=>{
    console.log('Server has Started...');
})
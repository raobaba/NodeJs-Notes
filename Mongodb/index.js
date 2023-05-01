const express = require("express");
require('dotenv').config(); 
const morgan = require('morgan');
const cors = require("cors"); 
const Router = require('./Routes/movieRoutes.js');
const Connection = require("./Config/db.js");
const Default = require('./default');
const app = express();
app.use(express.json()); 
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
app.use(express.static('./Public'));
app.use('/api/v1/movies',Router)
app.use(cors());  
Connection();  
app.listen(process.env.PORT, () =>
 console.log(`Server is running successfully on PORT ${process.env.PORT}`)
 ); 
 Default();
 
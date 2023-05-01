const express = require('express');
const app = express();
const mongoose = require('mongoose');
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

//MAKE CONNCTIONS TO DATABASE
mongoose.connect(process.env.MOGNO_URL, {
    useNewUrlParser: true
}).then((conn) => {
    //console.log(conn);
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required field'],
        unique:true
    },
    description:{
        type:String,
        require:[true,'Description is required']
    },
    duration:{
        type:Number,
        require:[true,'Duration is require field']
    },
    rating:{
        type:String,
        default:1.1
    }
})

const movieModel = mongoose.model('nodeNote',movieSchema);


app.listen(process.env.PORT,()=>{
    console.log('Server has Started...');
})

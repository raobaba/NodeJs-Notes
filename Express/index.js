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
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then((conn) => {
    //console.log(conn);
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});


// const movieSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true
//         },
//     description:{
//         type:String,
//         require:true
//     },
//     duration:{
//         type:Number,
//         require:true
//     },
//     rating:{
//         type:Number
//     }
// })

// const movieModel = mongoose.model('movie',movieSchema);


// const testMovie = new movieModel({
//     name:"KGF Chapter 1",
//     description:"Powerful People make places powerful",
//     duration:200,
//     rating:9.0
// })
// testMovie.save()
// .then(doc=>{
//     console.log(doc);
// }).catch(err=>{
//     console.log(err);
// })

app.listen(process.env.PORT,()=>{
    console.log('Server has Started...');
})

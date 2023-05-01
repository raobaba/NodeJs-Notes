const movie = require("./movie.json");
const movieModel = require("./Model/movieModel.js");
const defaultData = async ()=>{
    try {  
         await movieModel.deleteMany({})
         await movieModel.insertMany(movie);
        console.log('data imported successfully');
    } catch (error) {
        console.log("Error while Inserting default data",error.message)
    }  
}
module.exports=defaultData
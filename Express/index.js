const express = require('express');
const app = express();
// app.get('/',(req,res)=>{
//     res.status(200).send('<h1>Hello, World</h1>')
// })
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World",status:200});
})
app.listen(3000,()=>{
    console.log('Server has Started...');
})
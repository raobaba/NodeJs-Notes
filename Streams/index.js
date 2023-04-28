const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(3000, '127.0.0.1', () => {
    console.log('server is started')
})
//first solution 
// server.on('request', (req, res) =>{
//     fs.readFile('./file.txt', (err, data) =>{
//         if(err){
//             res.end('Something went wrong!');
//             return;
//         }
//         res.end(data);
//     })
// })


//second solution
// server.on('request', (req, res) =>{
//     let rs = fs.createReadStream('./file.txt');

//     rs.on('data', (chunk) => {
//         res.write(chunk)
//     })

//     rs.on('end', () => {
//         res.end();
//     })

//     rs.on('error', (error) => {
//         res.end(error.message);
//     })
// })

//third solution using pipe methode

server.on('request', (req, res) => {
    let rs = fs.createReadStream('./file.txt');
    rs.pipe(res);
    //redableSource.pipe(writableDest)
})

const http = require('http');
const fs = require('fs');
let html = fs.readFileSync("./Template/index.html",'utf-8')
let server = http.createServer((req,res)=>{
     res.end(html)
     console.log(res)
})
server.listen(8000,'127.0.0.1',()=>{
    console.log(`server has started`);
})
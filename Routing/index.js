const http = require('http');
const server = http.createServer((req,res)=>{
     let path = req.url;
     if(path==='/'||path==='/home'){
        res.end("You are in Home Page");
     }else if(path==='/about'){
        res.end("You are in About Page");
     }else if(path==='/contact'){
        res.end("You are in Contact Page");
     }else{
        res.end("Error 404: Page Not Found")
     }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server is started')
})
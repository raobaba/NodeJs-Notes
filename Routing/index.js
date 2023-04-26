const http = require('http');
const fs = require("fs");
const html = fs.readFileSync('./index.html','utf-8')
const server = http.createServer((req,res)=>{
     let path = req.url;
     if(path==='/'||path==='/home'){
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Home Page"));
     }else if(path.toLocaleLowerCase()==='/about'){
        res.end(html.replace(`{{%CONTENT%}}`,"You are in About Page"));
     }else if(path.toLocaleLowerCase()==='/contact'){
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Contact Page"));
     }else if(path.toLocaleLowerCase()==='/products'){
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Product Page"));
     }else{
        res.end(html.replace(`{{%CONTENT%}}`,'Error 404: Page Not Found'))
     }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server is started')
})
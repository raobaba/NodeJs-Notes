const http = require('http');
const fs = require("fs");
const html = fs.readFileSync('./index.html','utf-8')
const server = http.createServer((req,res)=>{
     let path = req.url;
     if(path==='/'||path==='/home'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Home Page"));
     }else if(path.toLocaleLowerCase()==='/about'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`,"You are in About Page"));
     }else if(path.toLocaleLowerCase()==='/contact'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Contact Page"));
     }else if(path.toLocaleLowerCase()==='/products'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`,"You are in Product Page"));
     }else{
        res.writeHead(404,{
            'Content-Type':'text/html',
            'My-Header':'There is No Route'
        })
        res.end(html.replace(`{{%CONTENT%}}`,'Error 404: Page Not Found'))
     }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server is started')
})
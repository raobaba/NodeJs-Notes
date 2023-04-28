const http = require('http');
const fs = require("fs");
const url = require('url');
const events = require('events');
const user = require("./user");
const html = fs.readFileSync('./index.html', 'utf-8')
const products = JSON.parse(fs.readFileSync('../Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./product-list.html', 'utf-8');
const productDetailHtml = fs.readFileSync('./product-details.html','utf-8');
const replaceHtml = require('./html-module.js');


const server = http.createServer();
server.on('request',(req, res) => {
    let { query, pathname: path } = url.parse(req.url, true);
    console.log(URL);
    //let path = req.url
    if (path === '/' || path === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello,World'
        })
        res.end(html.replace('{{%CONTENT%}}', 'You are in Home Page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`, "You are in About Page"));
    } else if (path.toLocaleLowerCase() === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello,World'
        })
        res.end(html.replace(`{{%CONTENT%}}`, "You are in Contact Page"));
    } else if (path.toLocaleLowerCase() === '/products') {
        if(!query.id){
            let productHtmlArray = products.map((prod) => {
                return replaceHtml(productListHtml, prod);
            })
            let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.end(productResponseHtml);
        } else {
            let prod = products[query.id]
            let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
            res.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'My-Header': 'There is No Route'
        })
        res.end(html.replace(`{{%CONTENT%}}`, 'Error 404: Page Not Found'))
    }
})

let myEmitter = new user();

myEmitter.on('userCreated', (id, name) => {
    console.log(`A new user ${name} with ID ${id} is created!`)
})

myEmitter.on('userCreated', (id, name) => {
    console.log(`A new user ${name} with ID ${id} is added to database!`)
})

myEmitter.emit('userCreated', 101, 'John');


server.listen(3000, '127.0.0.1', () => {
    console.log('server is started')
})
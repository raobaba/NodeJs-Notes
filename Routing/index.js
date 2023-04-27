const http = require('http');
const fs = require("fs");
const url = require('url');
const html = fs.readFileSync('./index.html', 'utf-8')
const products = JSON.parse(fs.readFileSync('../Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./product-list.html', 'utf-8');
let productHtmlArray = products.map((prod) => {
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output = output.replace('{{%NAME%}}', prod.name);
    output = output.replace('{{%MODELNAME%}}', prod.modeName);
    output = output.replace('{{%MODELNO%}}', prod.modelNumber);
    output = output.replace('{{%SIZE%}}', prod.size);
    output = output.replace('{{%CAMERA%}}', prod.camera);
    output = output.replace('{{%PRICE%}}', prod.price);
    output = output.replace('{{%COLOR%}}', prod.color);
    output = output.replace('{{%ID%}}', prod.id);
    output = output.replace('{{%ROM%}}', prod.ROM);
    output = output.replace('{{%DESC%}}', prod.Description);
    output = output.replace('{{%ID%}}', prod.id);
    return output;
})

const server = http.createServer((req, res) => {
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
        let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(''))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(productResponseHtml);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'My-Header': 'There is No Route'
        })
        res.end(html.replace(`{{%CONTENT%}}`, 'Error 404: Page Not Found'))
    }
})
server.listen(3000, '127.0.0.1', () => {
    console.log('server is started')
})
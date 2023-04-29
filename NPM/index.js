const fs = require('fs');
const http = require('http');
const server = http.createServer()

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
})
console.log('Program has started')

//STORED - 2ND PHASE
fs.readFile('./Files/input.txt', () => {
    console.log('File read complete!');

    //STORED IN - 1ST PHASE
    setTimeout(() => {
        console.log('Timer callback executed')
    }, 0);

    //STORED IN - 3RD PHASE
    setImmediate(() => {console.log('SetImmediate callback executed')});

    process.nextTick(() => {console.log('Process.nextTick callback executed')})
})

console.log('Program has completed')
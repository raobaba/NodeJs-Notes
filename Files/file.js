//lecture-5 synchronously
const readline = require('readline');
const fs = require('fs');
let textIn = fs.readFileSync('./input.txt','utf-8');
console.log(textIn)
let content = `content read from input.txt:${textIn}\n Date created:${new Date().toDateString()} `;
fs.writeFileSync('./output.txt',content);
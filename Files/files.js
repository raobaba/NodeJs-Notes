//lecture -7 asychronously

const fs = require('fs');
fs.readFile('./start.txt','utf-8',(err,data)=>{
    console.log(data);
    fs.readFile(`./${data}.txt`,'utf-8',(err1,data1)=>{
        console.log(data1)
        fs.readFile(`./append.txt`,'utf-8',(err2,data2)=>{
            console.log(data2)
            fs.writeFile(`./output.txt`,`${data1}\n\n${data2}\n\n${new Date().toDateString()}`,(err3,data3)=>{
                console.log(`Files written successfully`);
            })
        })
    })
})
console.log('Reading file...')
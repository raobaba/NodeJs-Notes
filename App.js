const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Please Enter Your Name:"+"",(name)=>{
    console.log("You Entered",name)
    rl.close();
})
rl.on('close',()=>{
    console.log('Interface Closed');
    process.exit(0);
})
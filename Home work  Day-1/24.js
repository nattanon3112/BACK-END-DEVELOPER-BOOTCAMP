const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("What is your name ?",
    function(userName){
        console.log(`Hello ${userName}`);
        rl.close();
    }

)
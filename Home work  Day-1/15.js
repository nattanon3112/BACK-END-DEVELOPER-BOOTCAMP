const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("กรุณากรอกชื่อของคุณ :", (userName) => {
    console.log(`Hello ${userName}\nGoodbye,${userName}`);
    rl.close();
})
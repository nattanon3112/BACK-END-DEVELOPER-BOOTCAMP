const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("กรอกคะแนนของคุณ ?",(score) => {
    if(score >= 90){
        console.log("ยินดีด้วยคุณได้เกรด A")
    }else{
        console.log("เสียใจด้วยคะแนนของคุณต่ำกว่า 90")
    }
    rl.close()
})
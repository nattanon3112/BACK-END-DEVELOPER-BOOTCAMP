const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("กรอกคะแนนของคุณ ",(score) => {
    if(score>=90){
        console.log("คุณได้รับเกรด 4");
    }else if(score>=80){
        console.log("คุณได้รับเกรด 3");
    }else if(score>=70){
        console.log("คุณได้รับเกรด 2");
    }else if(score>=60){
        console.log("คุณได้รับเกรด 1");
    }else{
        console.log("คุณได้รับเกรด 0");
    }
    rl.close();
})
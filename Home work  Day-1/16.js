const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("กรุณากรอกตัวเลขตัวแรก :", (firstInput) => {  // หลังจากใส่ Input ตัวแรกไปแล้ว จึงถามคำถามอีกครั้งเพื่อรับ Input ตัวที่ 2
    rl.question("กรุณากรอกตัวเลขตัวที่สอง :",(secondInput) => {
        const firstNumber = parseInt(firstInput);   // แปลงค่า Input ตัวแรก ให้กลายเป็น ตัวเลข
        const secondNumber = parseInt(secondInput);// แปลงค่า Input ตัวที่สอง ให้กลายเป็น ตัวเลข
        console.log(`ผลบวกของ ${firstNumber} + ${secondNumber} มีค่าเท่ากับ ${firstNumber+secondNumber}`);    
        rl.close();
    })
})
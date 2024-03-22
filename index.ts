#!/usr/bin/env node
import inquirer from "inquirer";

const result=await inquirer.prompt([
    {message:"Enter your first number", type:"number",name:"firstNumber"},
{message:"Enter your second number",type:"number",name:"secondNumber"},
{message:"Select Operator",type:"list",name:"operators",
choices:["ADD(+)","SUB(-)","MUL(*)","DIV(/)"]
},
]);

if(result.operators==="ADD(+)"){
    console.log(result.firstNumber+result.secondNumber);
}
else if (result.operators==="SUB(-)"){
    console.log(result.firstNumber-result.secondNumber);
}
else if(result.operators==="MUL(*)"){
    console.log(result.firstNumber*result.secondNumber);
}
else if(result.operators==="DIV(/)"){
    console.log(result.firstNumber/result.secondNumber);
}
else{console.log("Select Valid Operator");}






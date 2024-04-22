#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    //  esko ; terminator bolte ha matlab ak func khtam
    { message: "Enter first number", type: "number", name: "firstNumber" }, // {}object ha esmai msg likha ha phir , diya ha
    { message: "Enter second number", type: "number", name: "secondNumber" }, // take dusra msg likhe, ak object khtm hu tu , de ge
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// ab conditions per kam krna ha if, else if    conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}

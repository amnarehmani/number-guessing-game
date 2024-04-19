#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}

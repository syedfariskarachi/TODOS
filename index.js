#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtasks = await inquirer.prompt([
        {
            message: "What you want to add in your Todos!",
            name: "todo",
            type: "input",
        },
        {
            message: "Do you want to add more!",
            name: "addmore",
            type: "confirm",
            default: "false",
        },
    ]);
    todos.push(addtasks.todo);
    condition = addtasks.addmore;
    console.log(todos);
}

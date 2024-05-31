#! /usr/bin/env node

import inquirer from "inquirer";

let todos: String[] = [];
let conditions = true;

async function createTodo(todos: String[]) {
  while (conditions) {
    let ans = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: [
          "add todo",
          "update todo",
          "view todo",
          "delete todo",
          "exit",
        ],
      },
    ]);

    if (ans.select === "add todo") {
      let addTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "Add Your Todo Item: ",
        },
      ]);

      todos.push(addTodo.todo);
      console.log(todos);
    }

    if (ans.select === "update todo") {
      let updateTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "list",
          message: "Select Update Todo Item: ",
          choices: todos.map((item) => item),
        },
      ]);

      let addTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "Add Your Update Todo Item: ",
        },
      ]);

      let newTodos = todos.filter((val) => val !== updateTodo.todo);
      todos = [...newTodos, addTodo.todo];
      console.log(todos);
    }

    if (ans.select === "view todo") {
      console.log(todos);
    }

    if (ans.select === "delete todo") {
      let deleteTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "list",
          message: "Select Delete Todo Item: ",
          choices: todos.map((item) => item),
        },
      ]);

      let newTodos = todos.filter((val) => val !== deleteTodo.todo);
      todos = [...newTodos];
      console.log(todos);
    }

    if (ans.select === "exit") {
      conditions = false;
    }
  }
}

createTodo(todos);

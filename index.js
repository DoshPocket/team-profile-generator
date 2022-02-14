const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const teamArr = [];

function generateTeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the team member's name.",
            name: "inputName"
        },
        {
            type: "input",
            message: "Enter the team member's ID number.",
            name: "inputNumber"
        },
        {
            type: "input",
            message: "Enter the team member's email.",
            name: "inputEmail"
        },
    ])
}
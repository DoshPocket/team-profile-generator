const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const teamArr = [];
const path = require('path');

// link jest

// prompts for manager
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the team manager's name.",
            name: "inputName"
        },
        {
            type: "input",
            message: "Enter the team manager's ID number.",
            name: "inputNumber"
        },
        {
            type: "input",
            message: "Enter the team manager's email.",
            name: "inputEmail"
        },
        {
            type: "input",
            message: "Enter the team manager's office number.",
            name: "inputOfficeNumber"
        },
    ])
    .then(response =>{
        const manager = new Manager(
            response.inputName, response.inputNumber, response.inputEmail, response.inputOfficeNumber 
        )
            teamArr.push(manager);
            console.log(teamArr);
            const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            fs.writeFileSync(dist, `<p>${manager.name}</p>`, "UTF-8")
    })
};

// prompts for engineer
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's name.",
            name: "inputName"
        },
        {
            type: "input",
            message: "Enter the engineer's ID number.",
            name: "inputNumber"
        },
        {
            type: "input",
            message: "Enter the engineer's email.",
            name: "inputEmail"
        },
        {
            type: "input",
            message: "Enter the engineer's GitHub user name.",
            name: "inputGithub"
        },
    ])
    .then(response =>{
        const engineer = new Engineer(
            response.inputName, response.inputNumber, response.inputEmail, response.inputGithub 
        )
            teamArr.push(engineer);
            console.log(teamArr);
            const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            fs.writeFileSync(dist, `<p>${engineer.name}</p>`, "UTF-8")
    })
};

// prompts for intern
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the intern's name.",
            name: "inputName"
        },
        {
            type: "input",
            message: "Enter the intern's ID number.",
            name: "inputNumber"
        },
        {
            type: "input",
            message: "Enter the intern's email.",
            name: "inputEmail"
        },
        {
            type: "input",
            message: "Enter the intern's school.",
            name: "inputSchool"
        },
    ])
    .then(response =>{
        const intern = new Intern(
            response.inputName, response.inputNumber, response.inputEmail, response.inputSchool 
        )
            teamArr.push(intern);
            console.log(teamArr);
            const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            fs.writeFileSync(dist, `<p>${intern.name}</p>`, "UTF-8")
    })
};

createManager();
createEngineer();
createIntern();
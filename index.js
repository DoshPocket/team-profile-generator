const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/htmlRenderer");
const teamArr = [];
const path = require('path');
// write a destructured link to funciton in htmlRenderer

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
            let i = (false);
            do {
                i = addMember();
            } while (i)
           
            // const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            // fs.writeFileSync(dist, `<p>${manager.name}</p>`, "UTF-8")
    })
};

// function addMember() {
//         inquirer.prompt([
//             {
//                 type: "list",
//                 message: "Use arrow keys to select the role of the team member to add:",
//                 name: "memberRole",
//                 choices: [
//                     "Engineer",
//                     "Intern",
//                     {
//                         name: "No more team members to add.",
//                         value: false,
//                         return (response);
//                 ]}
            
//         ])
//                         .then(response =>{
//                             if (response.memberRole) === "Engineer"
//                             createEngineer()
//                         })
//             }
//                 };

function addMember() {
    inquirer.prompt ([
        {
            type: "list",
            message: "Use arrow keys to select the role of the team member to add:",
            name: "memberRole",
            choices: [
                "Engineer",
                "Intern",
                "No more team members to add."
            ]
        },

    ])
    .then (response =>{
        console.log(response);
        if(response.memberRole === "Engineer") {
            createEngineer();
        } else if (response.memberRole === "Intern") {
            createIntern();
        } else {
            // writeFILE
            return (false)
        }
        return (true)
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
            addMember();
            // const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            // fs.writeFileSync(dist, `<p>${engineer.name}</p>`, "UTF-8")
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
            addMember();
            // const dist = path.join(path.resolve(__dirname, 'dist'), 'index.html');
            // fs.writeFileSync(dist, `<p>${intern.name}</p>`, "UTF-8")
    })
};

createManager();
// createEngineer();
// createIntern();
// addMember();

//funciton with template literal that will take in info and call after the user exits the inquirer
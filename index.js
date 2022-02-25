const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml")
const teamArr = [];
const teamCardArr = [];
const path = require('path');

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
            teamCardArr.push(generateManager(manager));
            addMember();
    }) 
};
// gives user option to add new eningeer, intern, or finish making team
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
            function writeToFile(fileName, data) {
                fs.writeFile(fileName, data, (err) =>
                err? console.error(err) : console.log('File successfully written!')
                )}

                const joinArr = teamCardArr.join('');
                const html = generateHtml(joinArr);
                writeToFile("./output/index.html",html);
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
            teamCardArr.push(generateEngineer(engineer));
            addMember();
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
            teamCardArr.push(generateIntern(intern));
            addMember();
    })
};
//generates manager card for output
let generateManager = (manager) => {
    return`
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>

        </ul>
    </div>
</div>
    
    `
}
//generates engineer card for output
let generateEngineer = (engineer) => {
    return`
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>

        </ul>
    </div>
</div>
    
    `
}
//generates intern card for output
let generateIntern = (intern) => {
    return`
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>

        </ul>
    </div>
</div>
    
    `
}

// starts application with manager creation function
createManager();
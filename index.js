var inquirer = require('inquirer');
var fs = require('fs');
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const engineer = require('./lib/engineer');
const teamMember = [];

//starting by creating the team manager
const prompt = () => {
    createManager();

function createManager(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the manager's github user name?",
    }
])
    .then((responses) => {
        const manager = new manager(
            responces.name,
            responces.id,
            responces.email,
            responces.number
        );
        teamMember.push(manager);
});
}}


//allowing user to choose other members of the team
function createTeam(){
    inquirer.prompt([
    {
        type: "list",
        name: "teammember",
        message: "What other member of the team would you like to add?",
        choices: [
            "Intern",
            "Engineer",
            "No other members to add",
          ],
    }
])
    .then((choice) => {
        switch (choice) {
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
                default:
                //enter code here to prompt the creation of the html???
        }
    });
}

//if intern is chosen
function createIntern() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the intern's github user name?",
    },
    {
        type: "input",
        name: "school",
        message: "What school did the intern attend?"
    },
])
.then((responces) => {
    const intern = new intern(
        responces.name,
        responces.id,
        responces.email,
        responces.username
    );
    teamMember.push(intern);
    });
}

// //if engineer is chosen
function createEngineer(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github user name?",
    },
    {
        type: "input",
        name: "school",
        message: "What school did the engineer attend?"
    }
])
    .then((responces) => {
        const engineer = new engineer(
            responces.name,
            responces.id,
            responces.email,
            responces.username
        );
        teamMember.push(engineer);
        });
}


function init() {
    inquirer
    .prompt(createManager)
    .then((responses) => {
        console.log("Manager answers:",responses);
    })}

init();

var inquirer = require('inquirer');
var fs = require('fs');
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//starting by creating the team manager
const createManager = [
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
    },
];

//allowing user to choose other members of the team
const createTeam = [
    {
        type: "list",
        name: "team member",
        message: "What other member of the team would you like to add?",
        choices: [
            "Intern",
            "Engineer",
            "No other members to add",
          ],
    }
]

//if engineer is chosen
const createEngineer = [
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
]

//if intern is chosen
const createIntern = [
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
    }
]

function init() {
    inquirer
    .prompt(createManager)
    .then((responses) => {
        console.log("Manager answers:",responses);
    })}

init();

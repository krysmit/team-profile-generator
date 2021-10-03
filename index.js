var inquirer = require('inquirer');
var fs = require('fs');
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
]

//if intern is chosen
const createIntern = [
    
]
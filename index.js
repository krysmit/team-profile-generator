var inquirer = require('inquirer');
var fs = require('fs');
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMember = [];

//starting by creating the team manager
const questPrompt = () => {
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
            responses.name,
            responses.id,
            responses.email,
            responses.number
        );
        console.log("manager info done")
        teamMember.push(manager);
        createTeam();
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
                    console.log("oh no!")
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
.then((responses) => {
    const intern = new intern(
        responses.name,
        responses.id,
        responses.email,
        responses.username
    );
    console.log("intern info done")
    teamMember.push(intern);
    createTeam();
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
    .then((responses) => {
        const engineer = new engineer(
            responses.name,
            responses.id,
            responses.email,
            responses.username
        );
        console.log("engineer info done")
        teamMember.push(engineer);
        createTeam();
        });
}

const init = () => {
    questPrompt()
    .then((responses) => console.log("Responses captured!"))
    .catch((err) => console.error("err"))
}

//init is running the program through and I cannot type in answers at the moment
//init();

//questPrompt at least shows me that the code is starting to run properly
questPrompt();
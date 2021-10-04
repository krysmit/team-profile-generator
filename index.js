var inquirer = require('inquirer');
var fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const genHTML = require('./dist/genHTML');
const teamMemberEng = [];
const teamMemberInt = [];
const teamMemberMgr = [];

//starting by creating the team manager

    createManager();

    function createManager() {
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
        ])
            .then((responses) => {
                const manager = new Manager(
                    responses.name,
                    responses.id,
                    responses.email,
                    responses.office
                );
                console.log("manager info done")
                teamMemberMgr.push(manager);
                createTeam();
            });
    }



//allowing user to choose other members of the team
function createTeam() {
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
                    createIntern();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                default:
                    createHTML();
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
            const intern = new Intern(
                responses.name,
                responses.id,
                responses.email,
                responses.username
            );
            console.log("intern info done")
            teamMemberInt.push(intern);
            createTeam();
        });
}

// //if engineer is chosen
function createEngineer() {
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
            const engineer = new Engineer(
                responses.name,
                responses.id,
                responses.email,
                responses.username
            );
            console.log("engineer info done")
            teamMemberEng.push(engineer);
            createTeam();
        });
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, function (err, res) {
        if (err) throw err;
        console.log("HTML generated")
    })
}

const createHTML = () => {
    // questPrompt()
    //     .then((responses) => {
    //         console.log("Responses captured!");
    //         writeToFile('newTeam.html', genHTML(responses));
    //     })
    //     .catch((err) => console.error("err"));
    console.log(teamMemberEng, teamMemberInt, teamMemberMgr);
}

//init runs the program into the next line and I cannot type in answers at the moment
//init();

//questPrompt at least shows me that the code is starting to run properly
// questPrompt();
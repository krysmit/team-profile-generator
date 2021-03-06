var inquirer = require('inquirer');
var fs = require('fs');
var generateManager = require('./dist/genMgr');
var generateEngineer = require('./dist/genEng');
var generateIntern = require('./dist/genInt');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genHTML = require('./dist/genHTML');
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
        .then(({teammember}) => {
            switch (teammember) {
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
            name: "school",
            message: "What school did the intern attend?"
        },
    ])
        .then((responses) => {
            const intern = new Intern(
                responses.name,
                responses.id,
                responses.email,
                responses.school
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

    ])
        .then((responses) => {
            const engineer = new Engineer(
                responses.name,
                responses.id,
                responses.email,
                responses.github
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
    // console.log(teamMemberEng, teamMemberInt, teamMemberMgr);
    var managerHTML = ""
    for(let i=0; i < teamMemberMgr.length; i++) {
       managerHTML += generateManager(teamMemberMgr[i]);
    }
    console.log("manager created", managerHTML);
    var engineerHTML = ""
    for(let i=0; i < teamMemberEng.length; i++) {
        engineerHTML += generateEngineer(teamMemberEng[i]);
    }
    console.log("engineer created", engineerHTML);
    var internHTML = ""
    for(let i=0; i < teamMemberInt.length; i++) {
        internHTML += generateIntern(teamMemberInt[i]);
    }
    console.log("intern created", internHTML);
    var HTML = managerHTML + engineerHTML + internHTML;
    var fileData = genHTML(HTML);
    fs.writeFileSync("index.HTML", fileData, function(err, res) {
        if(err) throw err;
    })
    console.log("HTML generated!!!", fileData)
}
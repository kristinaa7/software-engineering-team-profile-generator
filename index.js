//user needs to install node version 16 and inquirer package by typing npm install in the terminal to work
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

//position classes are imported
const Manager = require('./Manager')
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice',
    },
    {
        type: 'list',
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        default: 'Engineer',
        name: 'employeeType',
    },
    {
        type: 'input',
        message: "What is your ${position}'s name?",
        name: 'pname',
    },
    {
        type: 'input',
        message: "What is your ${position}'s id?",
        name: 'pie',
    },
    {
        type: 'input',
        message: "What is your ${position}'s email?",
        name: 'pemail',
    },
    {
        type: 'input',
        message: "What is your ${position}'s school?",
        name: 'pschool',
    },
    {
        type: 'list',
        message: "What type of team member would you like to add?",
        name: 'position2',
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        default: 'Engineer',
    },
]

const HTML = generateMarkdown(data);
fs.writeFileSync("team-profile.html", HTML, (err) => {})


//loop for 


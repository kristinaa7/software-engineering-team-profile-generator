//user needs to install node version 16 and inquirer package by typing npm install in the terminal to work
const inquirer = require('inquirer')
const fs = require('fs')

//variables for each team member

const prompts = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officenumber',
    },
    {
        type: 'input',
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        default: 'Engineer',
        name: 'position1',
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


//user needs to install node version 16 and inquirer package by typing npm install in the terminal to work
const inquirer = require('inquirer')

//import the filesystem module
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./output/generateMarkdown')
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

//position classes are imported
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//Empty array for answers to questions
const employee = [];

//Prompts to obtain manager information
const managerQuestions = () => {
    inquirer.prompt ([
    {
        type: 'input',
        message: `Welcome to the team generator!
        Use 'npm run reset' to reset the dist/ folder
        
        Please build your team.
        What is your team manager's name?`,
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
        name: 'officeNumber',
    },
])

.then(answers => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
    employee.push(manager)
    addEmployee();
})};

//Prompts to obtain what roles are remaining on the team
const addEmployee = () => {
    inquirer.prompt([
    {
        type: 'list',
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        default: 'Engineer',
        name: 'addEmployeeType',
    }])

.then(function (userInput){
    switch(userInput.addEmployeeType) {
        case "Engineer":
        addEngineer();
        break;
        case "Intern":
        addIntern();
        break;

        default:
            createHTML();
    }
})
};

//Prompts to obtain engineer information
const addEngineer = () => {
   inquirer.prompt([
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's Github?",
        name: 'engineerGithub',
    },

])

.then(answers => {
    const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    employee.push(engineer);
    addEmployee();
})};

//Prompts to obtain intern information
const addIntern = () => {
    inquirer.prompt([
    {
        type: 'input',
        message: "What is your name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is your ID?",
        name: 'internID',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What university did you attend?",
        name: 'school',
    },
])

.then(answers => {
    const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.school);
    employee.push(intern);
    addEmployee();
})};

//creates a new file
function createHTML() {
    console.log("Yay! You added all members to the team!")
    fs.writeFileSync(outputPath, generateMarkdown(employee), "utf-8")
};

//calls the function to begin the prompts
managerQuestions();
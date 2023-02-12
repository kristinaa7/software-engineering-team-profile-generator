//variables defining the entire team and setting team as the object that will be used later on to output the html page
const generateTeam = team => {

//variable defining manager and the function to pull user prompt info into an employee card for manager
    const generateManager = manager => {
        return `
    <div class="card employee-card">
        <div class="card-body card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
            </ul>
        </div>
    </div>
    `};

//variable defining engineer and the function to pull user prompt info into an employee card for engineer
    const generateEngineer = engineer => {
        return `
    <div class="card employee-card">
    <div class="card-body card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href=https://github.com/jordangit target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
            </div>
        </div>
    `};

    //variable defining intern and the function to pull user prompt info into an employee card for intern
    const generateIntern = intern => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
    </div>
    `};
    
    //empty array that will join all the code together
    let teamHTML = [];

    //filter returns only the elements from the array with the specified criteria 
    //push adds one or more elements to the end of an array
    //map retuns the new array with the changes of data items
    //source for push and array -> https://codeburst.io/map-filter-and-reduce-in-javascript-d2725c59571d
    teamHTML.push(team
    .filter(mgr => mgr.getRole() === "Manager")
    .map(mgr => generateManager(mgr)));

    teamHTML.push(team
    .filter(eng => eng.getRole() === "Engineer")
    .map(eng => generateEngineer(eng)));

    teamHTML.push(team
    .filter(int => int.getRole() === "Intern")
    .map(int => generateIntern(int)));

    return teamHTML.join("");
};

//exports the entire html page with the entire team and their information
module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    
    <body>
       <div class="jumbotron text-center">
            <div class="row">
                <div class="col-12 p-5 mb-3 team-heading">
                    <h1 class="display-4">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid text-center">
            <div class="row">
              <div class="team-area col-12 d-flex">
              ${generateTeam(templateData)}
              </div>
            </div>
          </div>
      </body>
      </html>
    
    `};

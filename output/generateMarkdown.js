const generateTeam = team => {
    //make 3 functions for each role
    //body should 
    //generate

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
                <li class="list-group-item">Github: <a href=https://github.com/jordangit target="_blank" rel="noopener noreferrer">${engineerGithub}</a></li>
            </ul>
            </div>
        </div>
    `};

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

    let teamHTML = [];

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

module.exports = generateTeam => {
    return `

    
    `};

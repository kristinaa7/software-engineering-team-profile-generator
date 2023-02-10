const index = require('../index.js')
const generateTeam = team => {

    const generateManager = manager => {
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
            <div class="container text-center">
                <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
                <div class="card-header">
                  <h2 class="card-title">${name}</h2>
                  <h3 class="card-title"><i class="fas fa-mug hot mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id} </li>
                        <li class="list-group-item">Email: ${email}<a href="mailto:"></a></li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
        
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineerName}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerId}</li>
                <li class="list-group-item">Email: ${engineerEmail}<a href="mailto:"></a></li>
                <li class="list-group-item">Github: ${engineerGithub}</li>
            </ul>
            </div>
        </div>
            
                    </div>
                </div>
            </div>
        
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${internName}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${internID}</li>
                        <li class="list-group-item">Email: ${internEmail}<a href="mailto:"></a></li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                    </div>
                </div>
        </body>
        
        </html>
        `
    }
}

module.exports = generateTeam;

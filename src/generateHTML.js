const generateManager = function (manager) {
return `
<div class="col-4 mt-4">
<div class="card h-75">
  <div class="card-body ">
    <div class="card-title bg-primary text-white">
    <h3>${manager.name}</h3>
    <h5>Manager</h5>
    </div>
    <p class="card-text"> ID:${manager.id} </p>
    <p class="card-text"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text"> Office Number:${manager.officeNumber}</p>  
  </div>
</div>
</div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-75">
      <div class="card-body ">
        <div class="card-title bg-primary text-white">
        <h3>${engineer.name}</h3>
        <h5>engineer</h5>
        </div>
        <p class="card-text"> ID:${engineer.id} </p>
        <p class="card-text"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text"> GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></p>  
      </div>
    </div>
    </div>
        `;
    }

    const generateIntern = function (intern) {
        return `
        <div class="col-4 mt-4">
        <div class="card h-75">
          <div class="card-body ">
            <div class="card-title bg-primary text-white">
            <h3>${intern.name}</h3>
            <h5>intern</h5>
            </div>
            <p class="card-text"> ID:${intern.id} </p>
            <p class="card-text"> Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text"> School:${intern.school}</p>  
          </div>
        </div>
        </div>
            `;
        }

generateHTML = (data) => {

    pageArray = [];

    for (let i=0; i< data.length; i++) {
         const employee = data[i];
         const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);

        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
         
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
         
        }
    }

        const employeeCards = pageArray.join('')

        const generateTeam = generateTeamPage(employeeCards);
        return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return`
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" >
    <title>Team Profile Generator</title>
  </head>
  <body>

    <nav class="custom-navbar navbar navbar-light bg-danger justify-content-center">
      <span class="navbar-brand mb-0 h1 text-white text-uppercase font-weight-bold">My Team</span>
    </nav>

    <main>
    
      <div class="row justify-content-center" id="team-cards">
      ${employeeCards}
      </div>
      </main>
    </body>
  </html>
    `
}

module.exports = generateHTML;
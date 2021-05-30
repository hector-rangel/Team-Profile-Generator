const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = manager => {
    return `
        <div class="employee-card manager">
            <div class="card-header">
                <h5 class="card-name">${manager.getName()}</h5>
                <h6 class="card-position">${manager.getRole()}</h6>
            </div>
            <ul class="employee-info">
                <li class="list-info id">ID: ${manager.getId()}</li>
                <li class="list-info email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-info office">Office Number: ${manager.officeNumber()}</li>
            </ul>
        </div>
    `;
};

const generateEngineers = engineer => {
    if (engineer.length === 0) {
        return ``;
    }

    return engineer.map(engineer => {
        return `
            <div class="employee-card engineer">
                <div class="card-header">
                    <h5 class="card-name">${engineer.getName()}</h5>
                    <h6 class="card-position">${engineer.getRole()}</h6>
                </div>
                <ul class="employee-info">
                    <li class="list-info id">ID: ${engineer.getId()}</li>
                    <li class="list-info email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-info github">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        `;
    })
        .join("");
};

const generateInterns = intern => {
    if (intern.length === 0) {
        return ``;
    }

    return intern.map(intern => {
        return `   
            <div class="employee-card intern">
                <div class="card-header">
                    <h5 class="card-name">${intern.getName()}</h5>
                    <h6 class="card-position">${intern.getRole()}</h6>
                </div>
                <ul class="employee-info">
                    <li class="list-info id"> ID: ${intern.getId()}</li>
                    <li class="list-info email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-info school">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `;
    })
        .join("");
}

module.exports = (manager, engineer, intern) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <menta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="team-header">
                <h1 class="">My Team</h1>
            </div>
        </header>
        <main>
            <div class="card-container">
                ${generateManager(manager)}
                ${generateEngineers(engineer)}
                ${generateInterns(intern)}
            </div>
        </main>
    </body>
    </html>
    `;
};
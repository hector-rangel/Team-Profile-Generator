const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

function People() {
    this.engineer = [];
    this.intern = [];
}

People.prototype.addManager = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is your office number?'
            }
        ])
        .then(({ name, id, email, officenumber }) => {
            this.manager = new Manager(name, id, email, officenumber);

            this.teamMembers();
        })
}

People.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github?'
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineer.push(new Engineer(name, id, email, github));

            this.teamMembers();
        })
}

People.prototype.addIntern = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where did you go to school?'
            }
        ])
        .then(({ name, id, email, school }) => {
            this.intern.push(new Intern(name, id, email, school));

            this.teamMembers();
        })
}

People.prototype.teamMembers = function () {
    inquirer
    .prompt({
        type: 'list',
        name: "action",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Exit"]
    })
        .then(({ action }) => {
            if (action === "Add Engineer") {
                this.addEngineer();
            }
            else if (action === "Add Intern") {
                this.addIntern();
            }
            else {
                this.generateHtml();
            }
        })
}

People.prototype.generateHtml = function () {
    writeFile(generatePage(this.manager, this.engineer, this.intern))
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse.message);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = People;

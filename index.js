const inquirer = require('inquirer');
const {type} = require('os');
const createHtml = require('./src/create-HTML');
const {writeFile, copyFile} = require('./utils/generateHTML.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');




const promptQuestions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Name required');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID number",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's e-mail address",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'role',
            message: "Please enter employee's role",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if(roleInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }
        }


    ])
}
const inquirer = require('inquirer');
const {type} = require('os');
const createHtml = require('./src/create-HTML');
const {writeFile, copyFile} = require('./utils/generateHTML.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { ESRCH } = require('constants');

const teamMembers = [];


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add any more team members?'
            // validate: addMore => {
            //     if(addMore === true) {
            //         return promptQuestions()
            //     } else {
            //         return false;
            //     }
        }
    ])
};





const promptManager = () => {
    inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Who is the manager of the project?',
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
                name: 'managerId',
                message: "What is the manager's employee ID?",
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
                name: 'managerEmail',
                message: "What is the manager's email?",
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Email required');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if(officeNumberInput) {
                        return true;
                    } else {
                        console.log('Office number required');
                        return false;
                    }
                }
            },
        ])
            .then (answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumbe);
            teamMembers.push(manager);
            createTeam();
        })
};
promptManager();


// create function createTeam() that prompts question if they are engineer or intern
const createTeam = () => {

    console.log("please enter you first team  member");

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then (answer => {
        if (answer.role === 'Engineer') {
            getEngineer();
        } else {
            getIntern();
        };
    })
};



const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
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
            message: "Please enter engineer's ID number",
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
            message: "Please enter engineer's e-mail address",
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
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('github required');
                    return false;
                }
            }  
        }
    ])
};



const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
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
            message: "Please enter intern's ID number",
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
            message: "Please enter intern's e-mail address",
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
            type: 'input',
            name: 'github',
            message: "What school does the intern attend?" ,
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('school required');
                    return false;
                }
            }  
        }
    ])
}






// promptManager()
// .then(data => {
//     console.log("please add your first team member");
//     promptQuestions(data)
//     .then( data => {
//         console.log(data)
//         if (data.role === 'Engineer') {
//             inquirer.prompt([
//                 {
//                 type: 'input',
//                 name: 'github',
//                 message: "What is the engineer's github username?"
//                 }
//             ])
            
//             const engineer = new Engineer(data.name, data.id, data.email, data.github);
//             teamMembers.push(engineer);
//             console.log(teamMembers);

//         } else if (data.role === 'Intern') {
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'school',
//                     message: 'What school does this intern attend?'
//                 }   
//             ])
//             const intern = new Intern(data.name, data.id, data.email, data.school);
//             teamMembers.push(intern);
//             console.log(teamMembers);
//         } 
//     })
// })









// let data = '';

// initializes the page
// function init() {
//     promptQuestions()

// }

// init();



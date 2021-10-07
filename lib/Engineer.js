// inherit Employee function
const Employee = require('./Employee');

// github // GitHub username

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }


// getRole() // Overridden to return 'Engineer'

getRole() {
    return 'Engineer';
}

// getGithub()

getGithub() {
    return this.github;
}


};

module.exports = Engineer;
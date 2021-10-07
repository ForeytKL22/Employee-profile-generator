// inherit Employee function
const Employee = require('./Employee');

// school

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }


// getRole() // Overridden to return 'Intern'

getRole() {
    return 'Intern';
}

// getSchool()

getSchool() {
    return this.school;
}


};

module.exports = Intern;
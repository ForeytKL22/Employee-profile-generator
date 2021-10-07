// inherit Employee function
const Employee = require('./Employee');

// officeNumber

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }


// getRole() // overridden to return 'Manager'

getRole() {
    return 'Manager';
}

getOfficeNumber() {
    return this.officeNumber;
}


};


module.exports = Manager;
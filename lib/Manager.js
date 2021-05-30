const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }

    officeNumber() {
        return this.officenumber;
    }
    // overridden to return "Manager"
    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email)
        this.officeNumber = officeNumber;
    }

officeNumber() {
    return this.officeNumber;
};

 getRole(){
    return Manager;
};
}

//exporting the class information
module.exports = Manager
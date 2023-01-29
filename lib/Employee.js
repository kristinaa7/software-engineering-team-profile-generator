class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
getName(){
    return this.name
};

getId(){
    return this.ID
};

getEmail(){
    return this.email
};

getRole(){
    return 'Employee';
};
}

//exporting the class information
module.exports = Employee

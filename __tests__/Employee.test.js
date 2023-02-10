const Employee = require('../lib/Employee')
const employee = new Employee('Riley Smith', '500837', 'riley@gmail.com');

test ('creates an employee object',() => {
    expect(employee.getName()).toBe('Riley Smith');
    expect(employee.getId()).toBe('500837');
    expect(employee.getEmail()).toBe('riley@gmail.com');
});

test ('return employee name',() => {
    expect(employee.getName()).toEqual(expect.stringContaining('Riley Smith'));
});

test ('return employee ID',() => {
    expect(employee.getId()).toEqual(expect.stringContaining('500837'));
});

test ('return employee email',() => {
    expect(employee.getEmail()).toEqual(expect.stringContaining('riley@gmail.com'));
});
test ('return employee role',() => {
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
    

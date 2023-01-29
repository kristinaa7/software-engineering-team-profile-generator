const { default: expect } = require('expect');
const { describe } = require('yargs');
const Employee = require('./lib/Employee')
const employee = new Employee('Riley Smith', '500837', 'riley@gmail.com');

describe ('creates an employee object',() => {
    expect(employee.name).toEqual('Riley Smith');
    expect(employee.id).toEqual('500837');
    expect(employee.email).toEqual('riley@gmail.com');
});

describe('return employee name',() => {
    expect(employee.getName()).toEqual(expect.stringContaining('Riley Smith'));
});

describe('return employee ID',() => {
    expect(employee.getID()).toEqual(expect.stringContaining('500837'));
});

describe('return employee email',() => {
    expect(employee.getEmail()).toEqual(expect.stringContaining('riley@gmail.com'));
});
describe('return employee role',() => {
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
    

const Manager = require('./lib/Manager')

const manager = new Manager('Kris Smith', '199712', 'kristina@gmail.com', '1234567890');

describe ('creates a manager object',() => {
    expect(manager.name).toEqual('Kris Smith');
    expect(manager.id).toEqual('199712');
    expect(manager.email).toEqual('kristina@gmail.com');
    expect(manager.officenumber).toEqual('1234567890');
});

describe('return manager school',() => {
    expect(manager.getOfficenumber()).toEqual(expect.stringContaining('1234567890'));
});

describe('return manager role',() => {
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
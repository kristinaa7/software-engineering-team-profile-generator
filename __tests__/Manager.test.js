const Manager = require('../lib/Manager')

const manager = new Manager('Kris Smith', '199712', 'kris@gmail.com', '1234567890');

test ('creates a manager object',() => {
    expect(manager.getName()).toBe('Kris Smith');
    expect(manager.getId()).toBe('199712');
    expect(manager.getEmail()).toBe('kris@gmail.com');
    expect(manager.getofficeNumber()).toBe('1234567890');
});

test ('return manager school',() => {
    expect(manager.getofficeNumber()).toEqual(expect.stringContaining('1234567890'));
});

test ('return manager role',() => {
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
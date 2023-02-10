const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Jordan Smith', '123456', 'jordan@gmail.com', 'jordangit');

test ('creates an engineer object',() => {
    expect(engineer.getName()).toBe('Jordan Smith');
    expect(engineer.getId()).toBe('123456');
    expect(engineer.getEmail()).toBe('jordan@gmail.com');
    expect(engineer.getGithub()).toBe('jordangit');
});

test ('return engineer github',() => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining('jordangit'));
});

test ('return engineer role',() => {
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
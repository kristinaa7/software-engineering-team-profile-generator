const Engineer = require('./lib/Engineer')
const engineer = new Engineer('Jordan Smith', '123456', 'jordan@gmail.com');

describe ('creates an engineer object',() => {
    expect(engineer.name).toEqual('Jordan Smith');
    expect(engineer.id).toEqual('123456');
    expect(engineer.email).toEqual('jordan@gmail.com');
    expect(engineer.github).toEqual('jordangit');
});

describe('return engineer github',() => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining('jordangit'));
});

describe('return engineer role',() => {
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
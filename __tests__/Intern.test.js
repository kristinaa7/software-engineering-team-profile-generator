const Intern = require('./lib/Intern')
const intern = new Intern('Eden Smith', '050923', 'eden@gmail.com', 'Washington');

describe ('creates an intern object',() => {
    expect(intern.name).toEqual('Eden Smith');
    expect(intern.id).toEqual('050923');
    expect(intern.email).toEqual('eden@gmail.com');
    expect(intern.school).toEqual('Washington');
});

describe('return intern school',() => {
    expect(intern.getSchool()).toEqual(expect.stringContaining('Washington'));
});

describe('return intern role',() => {
    expect(intern.getRole()).toEqual(expect.stringContaining('Engineer'));
});
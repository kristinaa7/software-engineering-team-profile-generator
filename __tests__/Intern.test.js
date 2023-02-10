const Intern = require('../lib/Intern')
const intern = new Intern('Eden Smith', '050923', 'eden@gmail.com', 'Washington');

test ('creates an intern object',() => {
    expect(intern.getName()).toBe('Eden Smith');
    expect(intern.getId()).toBe('050923');
    expect(intern.getEmail()).toBe('eden@gmail.com');
    expect(intern.getSchool()).toBe('Washington');
});

test ('return intern school',() => {
    expect(intern.getSchool()).toEqual(expect.stringContaining('Washington'));
});

test ('return intern role',() => {
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
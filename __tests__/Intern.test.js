const Intern = require('../lib/Intern.js');

test('create Intern object', () => {
    const intern = new Intern('Angela', 1874, '275@gmail.com', 'NCCU');

    expect(intern.name).toBe('Angela');
    expect(intern.id).toBe(1874);
    expect(intern.email).toBe('275@gmail.com');
    expect(intern.schoolName).toBe('NCCU');
    expect(intern.getRole()).toBe('Intern');

});
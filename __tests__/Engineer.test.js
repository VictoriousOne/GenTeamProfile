const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('create Engineer object', () => {
    const engineer = new Engineer('Donice', 9782, '275@gmail.com', 'VictoriousOne');

    expect(engineer.name).toBe('Donice');
    expect(engineer.id).toBe(9782);
    expect(engineer.email).toBe('275@gmail.com');
    expect(engineer.githubUserName).toBe('VictoriousOne');
    expect(engineer.getRole()).toBe('Engineer');

});
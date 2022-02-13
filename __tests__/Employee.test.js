
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('create Employee object', () => {
    const emp = new Employee('Kerry', 1227, '7575@gmail.com');

    expect(emp.name).toBe('Kerry');
    expect(emp.id).toBe(1227);
    expect(emp.email).toBe('7575@gmail.com');
    expect(emp.getRole()).toBe('Employee');

});
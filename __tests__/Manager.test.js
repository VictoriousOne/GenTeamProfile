//const { expect } = require('@jest/globals');
//const { test } = require('picomatch');
const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('create Manager object', () => {
    const manager = new Manager('Ted', 1234, '275@gmail.com', '100A');

    expect(manager.name).toBe('Ted');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('275@gmail.com');
    expect(manager.offcNum).toBe('100A');
    expect(manager.getRole()).toBe('Manager');

});
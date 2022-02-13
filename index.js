
const Manager = require('./lib/Manager.js');
const manager = new Manager('Ted', 1234, '275@gmail.com', '100A');
console.log(manager.getName());
console.log(manager.getId());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.offcNum);
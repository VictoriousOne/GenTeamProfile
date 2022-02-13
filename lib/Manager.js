
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, offcNum) {
        super(name, id, email);
        this.offcNum = offcNum;
    }

    getRole = () => "Manager";
}

const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, offcNum) {
        super(name, id, email);
        //super();
        this.offcNum = offcNum;
    }

    getRole = () => "Manager";
}

module.exports = Manager;
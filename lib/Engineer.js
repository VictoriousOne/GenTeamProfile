
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super(name, id, email);
        this.githubUserName = githubUserName;
    }

    getRole = () => "Engineer";
}
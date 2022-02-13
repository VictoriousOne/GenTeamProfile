
class Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id,
        this.email = email;
    }

    getName = () => this.name;

    getId = () => this.id;

    getEmail = () => this.email;

    getRole = () => "Employee";
}
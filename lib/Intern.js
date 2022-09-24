const Employee = require("./Employee");

class Intern extends Employee {
    constructor (id, name, email, school, role) {
        super(id, name, email, role)
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
        super.role = "Intern"
    }

}

console.log(new Intern (3, "Emma", "eholt", "Hope College"));
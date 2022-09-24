const Employee = require("./Employee");

class Manager extends Employee {
    constructor (id, name, email, officeNumber, role) {
        super(id, name, email, role)
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
        super.role = "Manager";
    }

}

console.log(new Manager(1, "chelsea", "ckru00", 2));
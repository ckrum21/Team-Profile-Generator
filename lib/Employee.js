class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = "";
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }
}

console.log(new Employee(1, "chelsea", "ckrum00@gmail"));

module.exports = Employee
const Employee = require("./Employee");

class Engineer extends Employee {
constructor (id, name, email, github, role ){
    super(id, name, email, role)
    this.id = id;
    this.name = name;
    this.email = email;
    super.role = "Engineer";
    this.github = github;
}

getGithub() {
    return this.github
}

}

console.log(new Engineer (2, "Evan", "edriggs", "edriggsgithub"));
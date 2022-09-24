
const Employee = require("../lib/Employee");

test("Employee Test", () => {
    const employee =  new Employee("Chelsea", 4, "ckrum00@gmail.com");

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(number));
    expect(employee.email).toEqual(expect.any(string));
});

test("employee name", () => {
    const employee = new Employee("Chelsea", 4, "ckrum00@gmail.com");

    expect(employee.getName()).toEqual(expect.any(string)); 
});

test("employee id", () => {
    const employee = new Employee("Chelsea", 4, "ckrum00@gmail.com");

    expect(employee.getId()).toEqual(expect.any(number)); 
});

test("employee email", () => {
    const employee = new Employee("Chelsea", 4, "ckrum00@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString())); 
});

test("employee role", () => {
    const employee = new Employee("Chelsea", 4, "ckrum00@gmail.com");

    expect(employee.getRole()).toEqual("Employee"); 
});
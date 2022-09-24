
const Manager = require("../lib/Manager");

test("Manager Test", () => {
    const manager = new Manager("Chelsea", 4, "ckrum00@gmail.com", 10);

    expect(manager.officeNumber).toEqual(expect.any(number));
});

test("Manager role", () => {
const manager = new Manager("Chelsea", 4, "ckrum00@gmail.com", 10);

    expect(manager.getRole()).toEqual("Manager");
});
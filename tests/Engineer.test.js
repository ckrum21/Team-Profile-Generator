
const Engineer = require("../lib/Engineer");

test("Engineer Test", () => {
    const engineer = new Engineer("Chelsea", 4, "ckrum00@gmail.com", "ckrum21");

    expect(engineer.github).toEqual(expect.any(string));
});

test("github value", () => {
    const engineer = new Engineer("Chelsea", 4, "ckrum00@gmail.com", "ckrum21");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("Get role", () => {
    const engineer = new Engineer("Chelsea", 4, "ckrum00@gmail.com", "ckrum21");

    expect(engineer.getRole()).toEqual("Engineer");
});
const Intern = require("../lib/Intern");

test("Intern Test", () => {
    const intern = new Intern("Chelsea", 4, "ckrum00@gmail.com", "msu")

    expect(intern.school).toEqual(expect.any(string));

});

test("Inter School", () => {
    const intern = new Intern("Chelsea", 4, "ckrum00@gmail.com", "msu");

    expect(intern.getSchool()).toEqual(expect.stringContianing(intern.school.toString()));

});

test("Intern Role", () => {
    const intern = new Intern("Chelsea", 4, "ckrum00@gmail.com", "msu");

    expect(intern.getRole()).toEqual("Intern");
});
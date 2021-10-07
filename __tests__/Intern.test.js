const Intern = require('../lib/Intern');

test("creates the inter's school", () => {
    const intern = new Intern('Bob', 50, 'test@gmail.com', 'ASU');
    expect(intern.school).toEqual(expect.any(String));
});

test("returns the intern's role", () => {
    const internRole = new Intern('Bob');
    expect(internRole.getRole()).toBe('Intern');
});

test("reutns the intern's school", () => {
    const internSchool = new Intern('Bob', 50, 'test@gmail.com', 'ASU');
    expect(internSchool.getSchool()).toEqual(expect.any(String));
});
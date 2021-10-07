
const Engineer = require('../lib/Engineer');

test("creates an engineer's github", () => {
    const engineer = new Engineer('Bob', 50, 'test@gmail.com', 'githubusername');
    expect(engineer.github).toBe('githubusername');
});

test("returns the engineer's role", () => {
    const engineerRole = new Engineer('Bob');
    expect(engineerRole.getRole()).toBe('Engineer');
});

test("returns the engineer's github", () => {
    const engineerGithub = new Engineer('Bob', 50, 'test@gmail.com', 'githubusername');
    expect(engineerGithub.getGithub()).toEqual(expect.any(String));
});
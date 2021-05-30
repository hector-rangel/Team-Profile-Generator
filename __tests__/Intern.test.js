const Intern = require('../lib/Intern');

test('create an intern', () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.name).toBe('David');
    expect(intern.id).toEqual('3');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});

test("get interns name", () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.getName()).toEqual(expect.stringContaining('David'));
});

test("get interns id", () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test("get interns email", () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("get interns school", () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get interns role", () => {
    const intern = new Intern('David', '3', 'email', 'school');

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});
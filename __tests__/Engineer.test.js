const Engineer = require('../lib/Engineer');

test('create an engineer', () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');
    expect(engineer.name).toBe('Alfredo');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});

test("get engineer's name", () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');

    expect(engineer.getName()).toEqual(expect.stringContaining('Alfredo'));
});

test("get engineer's id", () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test("get engineer's email", () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("get engineer's github", () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("get engineer's role", () => {
    const engineer = new Engineer ('Alfredo', '2', 'email', 'github');

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
const Employee = require('../lib/Employee');

test('Creates a employee', () => {
    const employee = new Employee('Hector', '23', 'email');

    expect(employee.name).toBe('Hector');
    expect(employee.id).toEqual('23');
    expect(employee.email).toBe('email');
});

test("gets employee's name", () => {
    const employee = new Employee('Hector', '23', 'email');

    expect(employee.getName()).toEqual(expect.stringContaining('Hector'));
});

test("get's employee's id", () => {
    const employee = new Employee('Hector', '23', 'email');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("get's employee's email", () => {
    const employee = new Employee('Hector','23', 'email');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("returns employee's role", () => {
    const employee = new Employee('Hector', '23', 'email');

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create an manager', () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.name).toBe('Xavier');
    expect(manager.id).toEqual('4');
    expect(manager.email).toBe('email');
    expect(manager.officenumber).toBe('officenumber');
});

test("get managers name", () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.getName()).toEqual(expect.stringContaining('Xavier'));
});

test("get managers id", () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test("get managers email", () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("get managers officenumber", () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.officeNumber()).toEqual(expect.stringContaining(manager.officenumber));
});

test("get managers role", () => {
    const manager = new Manager('Xavier', '4', 'email', 'officenumber');

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
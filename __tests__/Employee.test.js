const Employee = require('../lib/Employee');


test('creates an Employee object', () => {
    const employee = new Employee('Kristin', 50, 'test@gmail.com');

    expect(employee.name).toBe('Kristin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('test@gmail.com');

});

test('creates an employee name', () => {
    const employee = new Employee('Kristin');
    expect(employee.getName()).toBe('Kristin');
});

test('gets an employee id', () => {
    const employeeId = new Employee('Kristin', 50);
    expect(employeeId.getId()).toEqual(expect.any(Number));
});

test('gets an employee email', () => {
    const employeeEmail = new Employee('Kristin', 50, 'test@gmail.com');
    expect(employeeEmail.getEmail()).toBe('test@gmail.com');
});

test('return employee role', () => {
    const employeeRole = new Employee('Bob');
    expect(employeeRole.getRole()).toBe('Employee');
});

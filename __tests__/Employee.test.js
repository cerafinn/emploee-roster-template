const Employee = require('../lib/employee')

test('creates a new employee object', () => {
  const instanceEmployee = new Employee();
  expect(instanceEmployee).toEqual(expect.any(Object));
});

test('set name through app', () => {
  const name = 'Anna';
  const instanceEmployee = new Employee(name, 1, 'test@example.com');
  expect(instanceEmployee.name).toBe(name);
});

test('set id through app', () => {
  const id = '100';
  const instanceEmployee = new Employee('Anna', id, 'test@example.com');
  expect(instanceEmployee.id).toBe(id);
});

test('set e-mail through app', () => {
  const email = 'test@example.com';
  const instanceEmployee = new Employee('Anna', 1, email);
  expect(instanceEmployee.email).toBe(email);
});

test('check that getName gets the name', () => {
  const name = 'Anna';
  const instanceEmployee = new Employee(name, 1, 'test@example.com');
  expect(instanceEmployee.getName()).toBe(name);
});

test('check that getId gets the id', () => {
  const id = 100;
  const instanceEmployee = new Employee('Anna', id, 'test@example.com');
  expect(instanceEmployee.getId()).toBe(id);
});

test('check that getEmail gets the email', () => {
  const email = 'test@example.com';
  const instanceEmployee = new Employee('Anna', 1, email);
  expect(instanceEmployee.getEmail()).toBe(email);
});

test('check that getRole gets the role', () => {
  const role = 'Employee';
  const instanceEmployee = new Employee('Anna', 1, 'test@example.com');
  expect(instanceEmployee.getRole()).toBe(role);
});
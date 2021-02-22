const Employee = require('../lib/employee')
const Employee = require('../lib/employee')

test('creates a new employee object', () => {
  const instanceEmployee = new Employee();
  expect(instanceEmployee).toBe("object");
});

test('set name through app', () => {
  const name = 'Anna';
  const instanceEmployee = new Employee(name);
  expect(instanceEmployee.name).toBe(name);
});

test('set id through app', () => {
  const id = '100';
  const instanceEmployee = new Employee(id);
  expect(instanceEmployee.name).toBe(id);
});

test('set e-mail through app', () => {
  const email = 'test@example.com';
  const instanceEmployee = new Employee(email)
})

test('set role through app', () => {
  const role = 'testData';
  const instanceEmployee = new Employee(role)
})
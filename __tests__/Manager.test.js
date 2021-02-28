const Manager = require('../lib/manager')

// test role
test('check that getRole gets the role Manager', () => {
  const role = 'Manager';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', 'officeNumber');
  expect(instanceManager.getRole()).toBe(role);
});

// test number setting and getting
test('setting office number through the app', () => {
  const number = 'officeNumber';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', number);
  expect(instanceManager.officeNumber).toBe(number);
});

test('check that getNumber gets the office number set', () => {
  const number = 'officeNumber';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', number);
  expect(instanceManager.getNumber()).toBe(number);
});
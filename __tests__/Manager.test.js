const Manager = require('../lib/manager')

// test role
test('check that getRole gets the role Manager', () => {
  const role = 'Manager';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', 'officeNumber');
  expect(instanceManager.getRole()).toBe(role);
});

// test number setting and getting
test('setting number through the app', () => {
  const number = 'officeNumber';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', number);
  expect(instanceManager.number).toBe(number);
});

test('check that getnumber gets the numbername', () => {
  const number = 'officeNumber';
  const instanceManager = new Manager('Anna', 1, 'test@example.com', number);
  expect(instanceManager.getnumber()).toBe(number);
});
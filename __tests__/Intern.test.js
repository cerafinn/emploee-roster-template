const Intern = require('../lib/intern')

// test role
test('check that getRole gets the role Intern', () => {
  const role = 'Engineer';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', 'schoolName');
  expect(instanceIntern.getRole()).toBe(role);
});

// test school setting and getting
test('setting school through the app', () => {
  const school = 'schoolName';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', school);
  expect(instanceIntern.school).toBe(github);
});

test('check that getSchool gets the school', () => {
  const school = 'schoolName';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', school);
  expect(instanceIntern.getSchool()).toBe(school);
});
const Engineer = require('../lib/engineer')

// test role
test('check that getRole gets the role Engineer', () => {
  const role = 'Engineer';
  const instanceEngineer = new Engineer('Anna', 1, 'test@example.com', 'githubName');
  expect(instanceEngineer.getRole()).toBe(role);
});

// test github setting and getting
test('setting github through the app', () => {
  const github = 'githubName';
  const instanceEngineer = new Engineer('Anna', 1, 'test@example.com', github);
  expect(instanceEngineer.github).toBe(github);
});

test('check that getGitHub gets the githubname', () => {
  const github = 'githubName';
  const instanceEngineer = new Engineer('Anna', 1, 'test@example.com', github);
  expect(instanceEngineer.getGitHub()).toBe(github);
});
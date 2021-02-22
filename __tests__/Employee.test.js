const Employee = require('../lib/employee')
const Employee = require('../lib/employee')

test('creates a new employee object', () =>{
  const instanceEmployee = new Employee();
  expect(instanceEmployee).toBe("object")
})

// Need to test the getName getID getEmail and getRole functions, and that it can create an employee object
// the intern’s name, ID, email, and school, and I am taken back to the menu
const Employee = require('./employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
  }
}
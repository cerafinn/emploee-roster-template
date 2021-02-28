// am prompted to enter the team manager’s name, employee ID, email address, and office number
const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email)
  }
}
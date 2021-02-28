const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamArray = []

function teamGenerator() {

  function createManager() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'managerName',
        message: "Enter the team manager's name:"
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Enter the team manager's employee ID:"
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the team manager's e-mail address:"
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Enter the team manager's office number:"
      }
    ])
    // inquirer prompt for manager -- this needs to come first!
    // and push to array
    // and loop to createTeam
  }

  function createEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "Enter the engineer's name:"
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "Enter the engineer's employee ID:"
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "Enter the engineer's e-mail address:"
      },
      {
        type: 'input',
        name: 'engineerGitHub',
        message: "Enter the engineer's GitHub username:"
      }
    ])

    // inquirer prompts for engineer
    // and push to array
    // and loop to createTeam
  }

  function createIntern() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: "Enter the intern's name:"
      },
      {
        type: 'input',
        name: 'internId',
        message: "Enter the intern's employee ID:"
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "Enter the intern's e-mail address:"
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "Enter the intern's school name:"
      }
    ])
    // inquirer prompts for intern
    // and push to array
    // and loop to createTeam
  }

  function createTeam() {
    inquirer
      .prompt({
        type: 'list',
        name: 'userSelection',
        message: 'Who would you like to add next?',
        choices: ['Engineer', 'Intern', 'There are no more team members to add']
      })
      .then(userInput => {
        switch (userInput.userSelection) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            generateTeam();
        }
      })
    // after manager, ask what the next team member should be
    // on loops, also ask if they're done adding members
  }

  function generateTeam() {
    // output to html, write file from template to distro file
  }
}

teamGenerator().createManager();
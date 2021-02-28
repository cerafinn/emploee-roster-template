const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generatePage = require('./src/html-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = []

// need to add validation so only numbers can be entered for the id

function teamGenerator() {
  console.log(`
    ====================
    Create A Team Roster
    ====================
  `)

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
    .then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeamMember();
    })
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
    .then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
      teamArray.push(engineer);
      createTeamMember();
    })
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
    .then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeamMember();
    })
  }

  function createTeamMember() {
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
    console.log(teamArray)
    // output to html, write file from template to distro file
    fs.writeFileSync(path.join(process.cwd(), "./dist/generatedTeam.html"), generatePage(teamArray));
  }

  createManager();
};

teamGenerator();
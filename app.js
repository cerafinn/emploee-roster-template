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
    // inquirer prompt for manager -- this needs to come first!
    // and push to array
  }

  function createEngineer() {
    // inquirer prompts for engineer
    // and push to array
    // and loop to createTeam
  }

  function createIntern() {
    // inquirer prompts for intern
    // and push to array
    // and loop to createTeam
  }

  function createTeam() {
    // after manager, ask what the next team member should be
    // on loops, also ask if they're done adding members
  }

  function generateTeam() {
    // output to html, write file from template to distro file
  }
}

teamGenerator().createManager();
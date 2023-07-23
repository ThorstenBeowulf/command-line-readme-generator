// Included packages
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// Questions for user input
const userQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What would you like this project title to be?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What description would you like to give for this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What steps are needed for installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can someone use this project?',
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'What quidelines are there for contributing to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests can be run for this project?',
  },
  {
    type: 'input',
    name: 'git',
    message: 'For questions, what is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'For questions, what is your email?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use for your project?',
    choices: ['MIT', 'AGPL 3.0', 'MPL 2.0', 'Apache 2.0']
  }
  ]

// Generates and writes README file
function writeToFile(data) {
  const renderFile = generateMarkdown(data);
  fs.writeFile('README.md', renderFile, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// Calls prompt to display questions and get user input then passes the result asynchronously to writeToFile 
function init() {
  inquirer.prompt(userQuestions)
    .then((data) => {
      writeToFile(data);
    })
}

// Function call to initialize app
init();

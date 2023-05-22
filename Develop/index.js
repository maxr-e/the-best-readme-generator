// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

function getLicense(value) {
    if (value === opengl)
}
// TODO: Create an array of questions for user input


function githubLink(value) {
    return `https://github.com/${value}`
}

function emailTo(value) {
  return `<a href="mailto:${value}">${value}</a>`
}

const questions = [
          {
              type: 'input',
              name: 'projectName',
              message: 'What is the name of the project?'
          },
          {
              type: 'input',
              name: 'repo',
              message: 'URL of Github repository:'
          },
          {
              type: 'list',
              name: 'license',
              message: 'What license do you want?',
              options: ['none', 'Boost', 'Apache', 'MIT', 'MPL', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3' ]
          },
          {
              type: 'input',
              name: 'description',
              message: 'Please give a brief description of your project:'
          },
          {
              type: 'input',
              name: 'install',
              message: 'Please describe how to install the development environment of the project:'
          },
          {
              type: 'input',
              name: 'usage',
              message: 'What dependencies are you using?'
          },
          {
              type: 'input',
              name: 'tests',
              message: 'What commands were used to test this app?'
          },
          {
              type: 'input',
              name: 'credits',
              message: 'List collaborators:'
          },
          {
              type: 'input',
              name: 'github',
              message: 'Enter Github username:'
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter email:'
          },
        ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err, 'error writing file');
        }
    });
}

function init() {
    inquirer.prompt(questions).then(
        (data) => {
        console.log(JSON.stringify(data, null, " "));
        data.githubLink= githubLink(data.userName);
        data.email= email(data.userEmail);
        writeToFile("ExampleREADME.md", data);
    });
}


  init();
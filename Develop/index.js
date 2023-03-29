// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const fs = require('fs');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;

// inquirer
//   .prompt([

    const promptUser = () => {
        return inquirer.prompt([
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is your name?',
    // },
    // {
    //   type: 'input',
    //   name: 'location',
    //   message: 'Where are you from?',
    // },
    // {
    //   type: 'input',
    //   name: 'hobby',
    //   message: 'What is your favorite hobby?',
    // },
    // {
    //   type: 'input',
    //   name: 'food',
    //   message: 'What is your favorite food?',
    // },
    // {
        //   type: 'input',
        //   name: 'github',
        //   message: 'Enter your GitHub Username',
        // },
        // {
            //     type: 'input',
            //     name: 'linkedin',
            //     message: 'Enter your LinkedIn URL.',
            // },

        // ])
        // inquirer
        // .prompt([
        // const questions = [
          {
              type: 'input',
              name: 'projectName',
              message: 'What is the name of the project?'
          },
          {
              type: 'input',
              name: 'license',
              message: 'What license do you have?',
              options: ['none', 'opengl', 'apache', 'MIT']
          },
          {
              type: 'input',
              name: 'description',
              message: 'Please give a brief description of your project:'
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
              message: 'Enter Github Username:'
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter email:'
          },
        ]);
    };

const generateMD = ({ projectName, license, description, usage, tests, credits,email }) =>
`
readme readme ${license}
readme . Readme readME ${usage}, ${tests}, and ${credits}. Readme READme README ${email}. Read me!
# ${projectName}

## Description
${description}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage]${usage}
- [Credits]${credits}
- [License]${license}

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


![alt text](assets/images/screenshot.png)
 

## Credits

${credits}

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License: ${license}

${license}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

// Bonus using writeFileSync as a promise
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateMD(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();


// .then((answers) => {
//     const mdTextContent = generateMD(answers);
    
//     // TODO: Create a function to write README file
//     // function writeToFile(fileName, data) {}
//     fs.writeFile('README.md', mdTextContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created README.md!')
//     );
//   });




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

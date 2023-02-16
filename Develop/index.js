// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license do you have?',
        options: ['none', 'opengl', 'apache']
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

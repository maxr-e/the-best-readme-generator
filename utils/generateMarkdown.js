function generateMarkdown(data) {
  return `# ${data.projectName}

  ${data.getLicense}

## Description
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [License](#license)
  
## Installation
  
  ${data.install}
  
## Usage
  Dependencies required:
  ${data.usage}

  Screenshots of project in action:
  (To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:)
  
  
  ![alt text](assets/images/screenshot.png)
  
## Tests
  ${data.tests}
  (Optional)
  Write tests for your application if applicable. Then provide examples on how to run them here.
  
## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)

  The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Credits

${data.credits}

## License:

${data.license}

${data.licenseNotice}

## Badges
(Optional)
Badges may be hosted by [shields.io](https://shields.io/).

## Contact Me
  * GitHub: ${data.github}
  * Email: ${data.email}

`;
}

module.exports = generateMarkdown;
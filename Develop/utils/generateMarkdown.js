// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  license = license.replace(/\s/g, "_");
  return `https://img.shields.io/badge/license-${license}-blue.svg`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//     return '';
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `Usage of this repository is under a ${license} license`;
}

// TODO: Create a function to generate markdown for README
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}
  ![image](${renderLicenseBadge(data.license)})

  ---

  ## Description

  ${data.description}

  ---

  ## Table Of Contents


  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ---

  ## Installation

  ${data.installation}

  ---

  ## Usage

  ${data.usage}

  ---

  ## License

  ${renderLicenseSection(data.license)}

  ---

  ## Contributing

  ${data.contribution}

  ---

  ## Tests

  ${data.tests}

  ---

  ## Questions

  If you have any questions about this project you can contact me:
  - on git ${data.git}
  - email ${data.email}


  `;
}

module.exports = generateMarkdown;
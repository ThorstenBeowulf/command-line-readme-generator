// Gets badge from shields.io, if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  license = license.replace(/\s/g, "_");
  return `https://img.shields.io/badge/license-${license}-blue.svg`;
}

// Creates a link to license info, if there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  license = license.replace(/\s/g, "-").toLowerCase();
  return `https://choosealicense.com/licenses/${license}/`
}

// Creates the license section, if there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `Usage of this repository is under a ${license} license`;
}

// Generates the markdown for README where data is an object containing user answers
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

  [${renderLicenseSection(data.license)}](${renderLicenseLink(data.license)})

  ---

  ## Contributing

  ${data.contribution}

  ---

  ## Tests

  ${data.tests}

  ---

  ## Questions

  If you have any questions about this project you can contact me:
  - on github: ${data.git}
  - by email: ${data.email}


  `;
}

module.exports = generateMarkdown;
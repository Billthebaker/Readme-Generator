

//function that returns the license link
function getLicenseText(license) {
  if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  } else if (license === "Apachi") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "Eclipse") {
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === "ISC") {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if (license === "Perl") {
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  }
  else if (license === "Perl") {
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }}


//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
   [Description](#description)
   [Installation](#installation)
   [How to use](#usage)
   [Tests](#tests)
   [Contributers](#contribution)
   [Contact Me](#qEmail)

  ## ${data.description}





  ## How to install: 
  ${data.installation}




  ## How to use: 
  ${data.usage}




  ## Past/Present/Future Tests: 
  ${data.tests}




  
  ## Contributing Team Members: 
  ${data.contributing}




Questions?
Github: [${data.qUsername}](https://${data.qGit})

Email [me](${data.qEmail}) anytime for questions regarding this application!

`;
}


module.exports = generateMarkdown;

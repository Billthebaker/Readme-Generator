const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
  {
    type:'input',
    name:'title',
    message:'What is the title of your repo?'
  },
  {
    type:'input',
    name:'description',
    message:'Describe your repo'
  },
  {
    type:'input',
    name:'installation',
    message:'how to install files'
  },
  {
    type:'input',
    name:'usage',
    message:'how to use this'
  },
  {
    type:'input',
    name:'contributing',
    message:'contributing designers'
  },
  {
    type:'input',
    name:'tests',
    message:'past present future tests'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'Apachi', 'Eclipse', 'ISC', 'Perl', 'Boost'],
  },
  {
    type:'input',
    name:'qUsername',
    message:'enter your github username'
  },
  {
    type:'input',
    name:'qGit',
    message:'enter URL to your github account'
  },
  {
    type:'input',
    name:'qEmail',
    message:'enter your email address'
  },


]


//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log("Success!"))
}

//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    console.log(answers)
   const content = generateMarkdown(answers)
   writeToFile('README.md', content)
  })
}

// Function call to initialize app
init();

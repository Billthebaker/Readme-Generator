const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    message:'contributing coders'
  },
  {
    type:'input',
    name:'tests',
    message:'past present future tests'
  },

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
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

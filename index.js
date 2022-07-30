// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'What license would you like to use?',
    'What is your project about?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// Create Table of Contents
let tableOfContents = (installation, usage, credits, license) => {
    return 
}


// Create Description
let projectDesc = (title, desc, motivation, intention, problem, learnings) => {
    return [
        `## <span style="color:#FFD23F">${title}</span>\n`,
        `${desc}\n`,
        `- ${motivation}`,
        `- ${intention}`,
        `- ${problem}`,
        `- ${learnings}\n`
    ]
}

// Create Project Title
let projectTitle = (title, desc) => {
    return [`# <span style="color:#FFD23F">${title}</span>\n`, desc]
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

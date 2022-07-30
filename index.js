// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {type:'input',message:'What is the name of your project?',name:'pTitle'},
    {type:'input',message:'Please enter a short description of your project:',name:'pDesc'},
    {type:'input',message:'What was your motivation for creating this project?',name:'pMotivation'},
    {type:'input',message:'What problem does your project solve?',name:'pProblem'},
    {type:'input',message:'What have you learned from working on this project?',name:'pLearnings'},
    {type:'confirm',message:'Do you want to include Installation Instructions?',name:'pInstructions'},
    {type:'confirm',message:'Do you want to include usage information?',name:'pUsage'},
    {type:'confirm',message:'Do you want to include Credit(s)?',name:'pCredits'},
    {type:'confirm',message:'Do you want to include License(s)?',name:'pLicense'},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}


// Create Table of Contents
let tableOfContents = (installation, usage, credits, license) => {
    return `## <span style="color:#FFD23F">Table of Contents</span>\n\r
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)\r
        ## <span style="color:#FFD23F">Installation</span>\n\r
        ${installation}\r
        ## <span style="color:#FFD23F">Usage</span>\n\r
        ${usage}\r
        ## <span style="color:#FFD23F">Credits</span>\n\r
        ## SCREENSHOTS GO HERE\r
        ${credits}\r
        ## <span style="color:#FFD23F">License</span>\n\r
        ${license}\r`
}


// Create Description
let projectDesc = (desc, motivation, problem, learnings) => {
    return `## <span style="color:#FFD23F">Description</span>\n
        ${desc}\r\n
        - ${motivation}
        - ${problem}
        - ${learnings}\r`
}

// Create Project Title
let projectTitle = (title) => {
    return `# <span style="color:#FFD23F">${title}</span>\n\r`
}


// TODO: Create a function to initialize app
function init() {

    // Ask User for input using inquirer
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            let myReadmeElements = [];
            myReadmeElements.push(projectTitle(answers.pTitle));
            myReadmeElements.push(projectDesc(answers.pDesc, answers.pMotivation, answers.pProblem, answers.pLearnings));
            writeToFile("myReadme.md", myReadmeElements);
        })
}

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: 'What is the name of your project?', name: 'pTitle' },
    { type: 'input', message: 'Please enter a short description of your project:', name: 'pDesc' },
    { type: 'input', message: 'What was your motivation for creating this project?', name: 'pMotivation' },
    { type: 'input', message: 'What problem does your project solve?', name: 'pProblem' },
    { type: 'input', message: 'What have you learned from working on this project?', name: 'pLearnings' },
    { type: 'list', message: 'Which License would you like to include?', name: 'pLicense', choices: ["Apache 2.0 License", "Boost", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "The zlib/libpng License"]}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
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
            writeToFile("myReadme.md", generateMD.generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
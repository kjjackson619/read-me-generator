const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./template.js');


// const contributor = 'Kevin Jackson';


// fs.writeFile('./index.html', generatePage(contributor), err => {
//     if (err) throw new Error(err);

//     console.log('ReadMe complete! See index.html for output!');
// });


const promptProject = readMeData => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'contribution',
            message: 'Would you like to add other contributors?',
            default: false
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Whom all contributed to the completion of this project?',
            when: ({ contribution }) => {
                if (contribution) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about your project:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project info!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What all can this project be used for?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter info here!');
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Enter the Github link to your project to demonstrate how to utilize and/or install project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project link!');
                    return false;
                }
            }
        },
    ]);
};





// const questions = [];


// function writeToFile(fileName, data) { }

// function init() { }


// init();
promptProject().then(answers => console.log(answers));
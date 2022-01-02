const fs = require('fs');
const generatePage = require('./template.js');

const pageDataArgs = process.argv.slice(2, process.argv.length);

const contributor = 'Kevin Jackson';




fs.writeFile('./index.html', generatePage(contributor), err => {
    if (err) throw new Error(err);

    console.log('ReadMe complete! See index.html for output!');
});

// const questions = [];


// function writeToFile(fileName, data) { }

// function init() { }


// init();

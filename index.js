// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const {Rectangle, Circle, Triangle} = require("./lib/shape.js");
const generatesvg = require('./generatesvg.js');


// TODO: Create an array of questions for user input
 const questions = [
    {
      type: 'input',
      message: 'Please enter upto three characters of text ',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Please input text color ',
      name: 'textColor',
    },
    {
        type: 'checkbox',
        message: 'Please select the shape for your logo',
        choices: ["Rectangle", "Circle", "Triangle"],
        name: 'shapeLogo',
      },
      {
        type: 'input',
        message:'Please input the color of the shape ',
        name: 'shapeColor',
      }
  ];

// TODO: Create a function to write svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log ("this is cool")
    });
}

const writeResponse = util.promisify(writeToFile)
console.log("writeResponse", writeResponse);

// TODO: Create a function to initialize app
async function init() {
const userResponse = await inquirer.prompt(questions);
writeToFile( "./examples/log.svg", JSON.stringify(userResponse))
const svg = generatesvg(userResponse);
console.log("svg: ", svg);
await writeResponse ('./examples/log.svg', svg)
}

// Function call to initialize app
init();


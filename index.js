const fs = require('fs');
const { join } = require('path');
const inquirer = require("inquirer");
const { createDocument } = require("./lib/shape.js");
const Triangle = require("./lib/triangle.js")
const Square = require("./lib/square.js")
const Circle = require("./lib/circle.js")
const { writeFile } = require('fs').promises;

// Array of questions for user input
function init() {
inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the 3 character text for the logo',
        // Will display the return if less than 3 characters inputted
        validate: function(text) {
            if (text.length < 3) {
                return 'Please put in 3 letters!'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color'
    }
])
.then((answers) => {
    let shape 
    if (answers.shape === "triangle") {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === "circle") {
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === "square") {
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
    }
    
    writeFile('./examples/logo.svg', shape.render(), (err) =>
    err ? console.log(err) : console.log('Please try again')
    );
})
// Output text is printed if logo.svg successfully created
.then(() => {
    console.log('Generated logo.svg!')
})
}

init();
// TODO: Include packages needed for this application
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content=generateMarkdown(data)
  fs.writeFile(fileName,content,(err)=>err?console.error(err):console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)
    })
}

// Function call to initialize app
init();

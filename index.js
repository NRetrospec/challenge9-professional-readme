// TODO: Include packages needed for this application
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of your project",
        name:"title",
    }
    ,
    {
        type:"list",
        message:"Choose the following license:",
        name:"license",
        choices:["MIT","ISC"]
    },
    {
        type: "input",
        message: "Please provide a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
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

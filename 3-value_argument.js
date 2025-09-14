// 3-value_argument.js

const args = process.argv.slice(2); // get all arguments after the script name

if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
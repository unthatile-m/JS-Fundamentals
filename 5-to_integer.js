// 5-to_integer.js

const args = process.argv.slice(2); // get arguments after the script name
const num = parseInt(args[0], 10);  // convert first argument to integer

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
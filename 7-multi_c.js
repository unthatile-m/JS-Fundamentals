// 7-multi_c.js

const times = parseInt(process.argv[2]);

if (!times) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < times) {
        console.log("C is fun");
        i++;
    }
}
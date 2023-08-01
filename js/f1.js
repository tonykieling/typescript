const { printTime } = require("./time.js");

function task(message) {
    // emulate time consuming task
    // let n = 3000000000;
    // while (n > 0)
    //     n--;

    // console.log(message);
    setTimeout(() => {
        console.log("new message!!!!!!!");
    }, 1000);
}

const i = printTime();
console.log('Start script...');
// setTimeout(() => {
//     task("new message!!!!!!!");
// }, 10);
task('Call an API');
const f = printTime();
printTime(i, f);
console.log('Done!');

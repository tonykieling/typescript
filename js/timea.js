"use strict";
var printTime = function (initial, final) {
    if (!initial || !final) {
        var currentTime = new Date();
        console.log("Current time: ", new Date(currentTime));
        return currentTime.toString();
    }
    else {
        console.log("Diff time is: ", ((Number(final) - Number(initial)) / 1000), " seconds");
        return "";
    }
};
module.exports = printTime;

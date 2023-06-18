function strangeCounter(t: number): number {
    let value: number = 3;
    let times: number = 1;
    let newTimeStart: number = 0;
    while (t > (value + newTimeStart)) {
        // console.log("value is: ", value, " newTimeStart:: ", newTimeStart);
        newTimeStart = value + newTimeStart;
        value = value * 2;
        times++; 
    }
    newTimeStart++;
    // console.log("times: ", times, " value:: ", value, " t:: ", t, " newTimeStart:: ", newTimeStart);
    value = value - (t - newTimeStart);
    // console.log("value: ", value);
    return value;
}
console.log(strangeCounter(23));
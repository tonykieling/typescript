// const printTime = (initial: string | null, final: string | null): string => {
exports.printTime = (initial, final) => {
    if (!initial || !final) {
        const currentTime = new Date();
        console.log("Current time: ", new Date(currentTime));
        return currentTime;
    } else {
        console.log("Diff time is: ", ((final - initial) / 1000), " seconds");
        return "";
    }
}

// export = printTime;
/*
0 10   10  10
0 10   10 100
0 10  100  10
0 10  100 100
0 100 100 100
0 100 100  10
0 100  10 100
0 100  10  10
0 1 2 4 8 16 32 

- 3
- 1
- 2
0, 1, 2
0, 1, 3
0, 2, 3
0, 2, 4
1 * (3 - 1 - 0) + 2 * 0 = 2
1 * (3 - 1 - 1) + 2 * 1 = 3
1 * (3 - 1 - 2) + 2 * 2 = 4

- 4
- 10
- 100
0, 10, 20, 30
0, 10, 20, 120
0, 10, 110, 120
0, 10, 110, 210
0, 100, 200, 300
0, 100, 200, 210
0, 100, 110, 210
0, 100, 110, 120
*/
function stones(n: number, a: number, b: number): number[] {
    // reverse position
    // if (a < b) {
    //     const temp: number = a;
    //     a = b;
    //     b = temp;
    //     // OR
    //     a = a + b; 3 
    //     b = a - b; 1
    //     a = a - b; 2
    // }
    const result: Array<number> = [];
    for (let i = 0; i < n - 1; i++) {
        let ans1: number = a * (n - 1 - i) + b * i;
        let ans2: number = b * (n - 1 - i) + a * i;
        // let ans1: number = a * i + (n - i - 1) * b; // tried this form but looks is missing the one (the first) value
        if (!result.includes(ans1)) result.push(ans1);
        if (!result.includes(ans2)) result.push(ans2);
    }
    result.sort((a, b) => a -b);
    return result;
}
// console.log(stones(6, 1, 2));
console.log(stones(4, 10, 100));
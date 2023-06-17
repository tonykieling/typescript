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
    const result: Array<number>[] = [];
    for (let i = 0; i < n-1; i++) {
        let ans1 = a * (n - 1 - i) + b * i;
        let ans2 = b * (n - 1 - i) + a * i;
        console.log("ans1: ", ans1, " ans2: ", ans2);
    }
    // const totalRounds: number = 2 ^ (n - 1);
    // for (let round = 0; round < totalRounds; round++) {
    //     let tempArray: Array<number> = [];
    //     for (let count = 0; count < n; count++) {
    //         tempArray = [...tempArray, count + a];
    //     }
    //     result.push(tempArray);
    // }
    // handle the array of arrays to get only the last item of each one
    return [];
}
console.log(stones(4, 10, 100));
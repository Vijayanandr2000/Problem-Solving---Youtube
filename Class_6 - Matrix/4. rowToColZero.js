// Problem Description
// You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.

// Problem Constraints
// 1 <= A.size() <= 103
// 1 <= A[i].size() <= 103
// 0 <= A[i][j] <= 103

// Input Format
// First argument is a vector of vector of integers.(2D matrix).

// Output Format
// Return a vector of vector after doing required operations.

// Example Input
// Input 1:
// [1,2,3,4]
// [5,6,7,0]
// [9,2,0,4]

// Example Output
// Output 1:
// [1,2,0,0]
// [0,0,0,0]
// [0,0,0,0]

const solve = (a) => {
    let zeroRow = [], zeroCol = []

    for(let row = 0 ; row < a.length; row++) {
        for(let col = 0 ; col < a[0].length;col++){
            if(a[row][col] == 0){
                zeroCol.push(col)
                zeroRow.push(row)
            }
        }
    }

    for(let row = 0 ; row < zeroRow.length; row++) {
        for(let col = 0 ; col < a[0].length; col++){
            a[zeroRow[row]][col] = 0
        }
    }

    for(let col = 0 ; col < zeroCol.length; col++) {
        for(let row = 0 ; row < a.length; row++){
            a[row][zeroCol[col]] = 0
        }
    }

    

    // console.log(zeroRow,zeroCol)


    console.log(a)

}

solve([
    [1,2,3,4],
    [5,6,7,0],
    [9,2,0,4]
])
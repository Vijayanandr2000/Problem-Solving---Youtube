// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

// Problem Constraints
// 1 <= A <= 1000

// Input Format
// First and only argument is integer A

// Output Format
// Return a 2-D matrix which consists of the elements added in spiral order.

// Example Input
// Input 1:
// 1

// Input 2:
// 2

// Input 3:
// 5

// Example Output
// Output 1:
// [ 
//     [1] 
// ]

// Output 2:
// [ 
//     [1, 2], 
//     [4, 3] 
// ]

// Output 2:
// [ 
//     [1, 2, 3, 4, 5], 
//     [16, 17, 18, 19, 6], 
//     [15, 24, 25, 20, 7], 
//     [14, 23, 22, 21, 8], 
//     [13, 12, 11, 10, 9] 
// ]

// Example Explanation
// Explanation 1:
// Only 1 is to be arranged.

// Explanation 2:
// 1 --> 2
//       |
//       |
// 4<--- 3



const solve = (n) => {
    let a = []

    for(let i = 0 ; i < n ; i++){
        let ans = []
        for(let j= 0 ; j< n ;j++){
            ans.push(0)
        }
        a.push(ans)
    }

    let num = 1;

    let startRow = 0, endRow = n - 1, startCol = 0, endCol = n-1;

    while(startRow <= endRow && startCol <= endCol){
        for(let col = startCol; col  <= endCol; col++){
            a[startRow][col] = num++
        }

        for(let row = startRow + 1 ; row <= endRow; row++){
            a[row][endCol] = num++
        }

        for(let col = endCol - 1 ; col >= startCol ; col--){
            a[endRow][col] = num++
        }

        for(let row = endRow -1 ; row > startRow ; row--){
            a[row][startCol] = num++
        }

        startRow++;
        startCol++;
        endCol--;
        endRow--
    }

    console.log(a)

}

solve(1)
solve(2)
solve(5)
// Problem Description
// Find the contiguous non-empty subarray within an array, A of length N, with the largest sum.

// Problem Constraints
// 1 <= N <= 1e6
// -1000 <= A[i] <= 1000

// Input Format
// The first and the only argument contains an integer array, A.

// Output Format
// Return an integer representing the maximum possible sum of the contiguous subarray.

// Example Input
// Input 1:
//  A = [1, 2, 3, 4, -10] 

// Input 2:
//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

// Example Output
// Output 1:
//  10 

// Output 2:
//  6 

// Example Explanation
// Explanation 1:
//  The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 

// Explanation 2:
//  The subarray [4,-1,2,1] has the maximum possible sum of 6. 

//   -2, 1, -3, 4, -1, 2, 1, -5, 4
// 0  0  1 0  4 3 5 6 1 5
// -I -2 1  1 4 4 5 6 6 6

const solve = (a) => {
    let sum = 0, max = -Infinity

    for(let i = 0 ; i < a.length ;i++){
        sum += a[i]
        max = Math.max(max, sum)

        if(sum < 0) sum = 0
    }

    console.log(max)

}

solve([1, 2, 3, 4, -10])
solve([-2, 1, -3, 4, -1, 2, 1, -5, 4])

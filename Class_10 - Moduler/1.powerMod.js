// Problem Description
// You are given A, B and C .
// Calculate the value of (A ^ B) % C

// Problem Constraints
// 1 <= A <= 109
// 0 <= B <= 105
// 1 <= C <= 109

// Input Format
// Given three integers A, B and C.

// Output Format
// Return an integer.

// Example Input
// Input 1:
// A = 2
// B = 3
// C = 3

// Input 2:
// A = 5
// B = 2
// C = 4

// Example Output
// Output 1:
// 2

// Output 2:
// 1

// Example Explanation
// For Input 1:
// (2 ^ 3) % 3 = 8 % 3 = 2
// For Input 2:
// (5 ^ 2) % 4 = 25 % 4 = 1

const solve = (a,b,c) => {
    // a^5 = a*a*a*a*a

    let ans = 1
    for(let i = 0 ; i < b; i++){
        ans = (ans % c * a % c) % c
    }

    console.log(ans)
}

solve(1000000000000,2,3)
solve(5,2,4)
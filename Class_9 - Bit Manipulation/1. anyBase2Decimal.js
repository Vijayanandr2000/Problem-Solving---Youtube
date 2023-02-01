// Problem Description
// You are given a number A. You are also given a base B. A is a number on base B.
// You are required to convert the number A into its corresponding value in decimal number system.

// Problem Constraints
// 0 <= A <= 109
// 2 <= B <= 9

// Input Format
// First argument A is an integer.
// Second argument B is an integer.

// Output Format
// Return an integer.


// Example Input
// Input 1:
// A = 1010
// B = 2

// Input 2:
// A = 22 
// B = 3


// Example Output
// Output 1:
// 10
// Output 2:
// 8

// Example Explanation
// For Input 1:
// The decimal 10 in base 2 is 1010.
// For Input 2:
// The decimal 8 in base 3 is 22.


const solve = (a,b) =>{
    let ans = 0
    let bit = 0
    while(a!=0){
        let lastBit = a%10
        let mul = lastBit*(b**bit)
        ans += mul
        a = Math.floor(a/10)
        bit++
    }

    console.log(ans)

}

solve(1010,2)
solve(22,3)


// 1 0 1 0
 
// 0 * 2^0 = 0
// 1 * 2^1 = 2 
// 0 * 2^2 = 0
// 1 * 2^3 = 8
// ----------
//         = 10
// -------
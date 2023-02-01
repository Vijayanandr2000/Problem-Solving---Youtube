// Problem Description
// Given a decimal number A and base B.
// You are required to change the decimal number A into the corresponding value in base B and return that.

// Problem Constraints
// 0 <= A <= 512
// 2 <= B <= 10

// Input Format
// The first argument will be decimal number A.
// The second argument will be base B.

// Output Format
// Return the conversion of A in base B.

// Example Input
// Input:
// A = 4
// B = 3

// Example Output
// Output:
// 11


// Example Explanation
// Explanation:
// Decimal number 4 in base 3 is 11.


const solve = (a,b) => {
    let ans = []
    while(a!=0){
        let rem = a%b
        ans.push(rem)
        a = Math.floor(a/b)
    }
    console.log(ans.reverse().join(''))
}

solve(4,3) 
solve(10,2) //1010 


// 3  4
// 3  1 1
//    0 1
// Problem Description
// The Fibonacci numbers are the numbers in the following integer sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
// In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:
// Fn = Fn-1 + Fn-2
//Given a number A, find and return the Ath Fibonacci Number using recursion.
// Given that F0 = 0 and F1 = 1.

// Problem Constraints
// 0 <= A <= 20

// Input Format
// First and only argument is an integer A.

// Output Format
// Return an integer denoting the Ath term of the sequence.

// Example Input
// Input 1:
//  A = 2

// Input 2:
//  A = 9

// Example Output
// Output 1:
//  1

// Output 2:
//  34


// Example Explanation
// Explanation 1:
//  f(2) = f(1) + f(0) = 1

// Explanation 2:
//  f(9) = f(8) + f(7) = 21 + 13  = 34

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

// assum= fib(n) => return fib(n)

// main = fib(n-1) + fib(n-2)

// base = n == 0 return 0  or n == 1 || n === 2 => return 1

const fib = (n) => {
    if(n == 0) return 0
    if(n == 1 || n== 2) return 1


    return fib(n-1) + fib(n-2)

}

console.log(fib(2))
console.log(fib(9))
// Problem Description
// Given an Integer A. Return 1 if A is prime and return 0 if not.

// Example Input
// Input 1:
// A = 5

// Input 2:
// A = 10

// Example Output
// Output 1:
// 1

// Output 2:
// 0

// Example Explanation
// Explanation 1:
// 5 is a prime number.

// Explanation 2:
// 10 is not a prime number.

const isPrime = (A) => {
    for(let i = 2; i*i <= A ;i ++){
        if(A % i == 0){
            return 0;
        }
    }

    return A == 1 ? 0 : 1;
}

console.log(isPrime(1));

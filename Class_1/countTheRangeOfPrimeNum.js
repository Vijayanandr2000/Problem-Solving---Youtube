// Problem Description
// You will be given an integer n. You need to return the count of prime numbers less than or equal to n.

// Example Input
// Input 1: 19
// Input 2: 1

// Example Output
// Output 1: 8
// Output 2: 0


// Example Explanation
// Explanation 1: Primes <= 19 are 2, 3, 5, 7, 11, 13, 17, 19
// Explanation 2: There are no primes <= 1 

const countTheRangeOfPrimeNumbers = (n) =>{
    //CHeck if a number is Prime r not prime
    const isPrime = (A) => {
        for(let i = 2; i*i <= A ;i ++){
            if(A % i == 0){
                return 0;
            }
        }
    
        return A == 1 ? 0 : 1;
    }

    let count = 0;

    for(let i=2;i<=n;i++){
        if(isPrime(i)){//if a prime is found then inc the count
            count++;
        }
    }

    return count;
}

console.log(countTheRangeOfPrimeNumbers(1));
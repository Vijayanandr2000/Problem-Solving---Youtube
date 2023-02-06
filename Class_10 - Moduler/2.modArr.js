// Problem Description
// You are given a large number in the form of a array A of size N where each element denotes a digit of the number.
// You are also given a number B. You have to find out the value of A % B and return it.

// Problem Constraints
// 1 <= N <= 105
// 0 <= Ai <= 9
// 1 <= B <= 109

// Input Format
// The first argument is an integer array A.
// The second argument is an integer B.

// Output Format
// Return a single integer denoting the value of A % B.

// Example Input
// Input 1:
// A = [1, 4, 3]
// B = 2

// Input 2:
// A = [4, 3, 5, 3, 5, 3, 2, 1]
// B = 47

// Example Output
// Output 1:
// 1

// Output 2:
// 20

// Example Explanation
// Explanation 1:
// 143 is an odd number so 143 % 2 = 1.

// Explanation 2:
// 43535321 % 47 = 20

// const solve = (a,b,c) => {
//     // a^5 = a*a*a*a*a

//     let ans = 1
//     for(let i = 0 ; i < b; i++){
//         ans = (ans % c * a % c) % c
//     }

//     // console.log(ans)
//     return ans
// }


const solveSol = (a,b) =>{

    let ans = 0, r = 1

    for(let i = a.length-1 ; i >= 0 ; i--){
        ans  = (ans  + (a[i] % b * r % b ) % b) % b
        r = (r * 10) %b
    }

    console.log(ans)
}

solveSol([1,4,3],2)
solveSol([4, 3, 5, 3, 5, 3, 2, 1],47)
// 0 => 10^0
// 1 => 10^1
// 2 => 10^2 => 10*10

// // 4, 3, 5, 3, 5, 3, 2, 1
// 1*10^0 = 1*1
// 2*10 
// 3*100
// .
// .
// .
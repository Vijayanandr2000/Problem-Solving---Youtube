// Problem Description
// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.

// Problem Constraints
// 1 <= N <= 105
// 1 <= Ai <= 10 4

// Input Format
// The first argument is the integer array A.

// Output Format
// Return a single integer denoting the sum of all subarray sums of the given array.

// Example Input
// Input 1:
// A = [1, 2, 3]
// 1+2+3+3+6+5 = 20
// Input 2:
// A = [2, 1, 3]
// 2+1+3+3+6+4 = 19

// Example Output
// Output 1:
// 20

// Output 2:
// 19

// Brute force approach
// const sumOfAllSubArr = (a) => {
//     let total = 0

//     for(let i = 0; i < a.length; i++){
//         for(let j = i; j < a.length; j++){
//             let sum = 0
//             for(let k = i ; k <= j ; k++){
//                 sum += a[k]
//             }

//             total += sum

//         }
//     }
//     console.log(total)

// }

const sumOfAllSubArr = (a) => {
    let sum = 0;
    for(let i = 0 ; i < a.length ; i++) {
        let s = i + 1
        let e = a.length - i

        let factor = s * e

        let mul = factor * a[i]
        sum += mul

    }

    console.log(sum)

}

sumOfAllSubArr([1,2,3])
sumOfAllSubArr([2,1,3])


// s e sum 
// 0 0 a[0]
// 0 1 a[0]+a[1]
// 0 2 a[0]+a[1]+a[2]

// 1 1 a[1]
// 1 2 a[1]+a[2]

// 2 2 a[2]


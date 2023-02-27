// Problem Description
// Given an array A of N integers.
// Find the length of the longest subarray in the array which sums to zero.

// Problem Constraints
// 1 <= N <= 105
// -109 <= A[i] <= 109

// Input Format
// Single argument which is an integer array A.

// Output Format
// Return an integer.

// Example Input
// Input 1:
//  A = [1, -2, 1, 2]

// Input 2:
//  A = [3, 2, -1]

// Example Output
// Output 1:
// 3

// Output 2:
// 0

// Example Explanation
// Explanation 1:
//  [1, -2, 1] is the largest subarray which sums up to 0.

// Explanation 2:
//  No subarray sums up to 0.

// 1, -2, 1, 2

// s = 0 -> 1 -> -1 -> 0 -> 2

// t = i+1

// m = {
//     1: 0,
//     -1: 1,
//     2: 4
// }


const solve = (a) => {
    let sum = 0, map = {}, max = 0
    for(let i = 0 ; i < a.length ; i++){
        sum += a[i]
        if(map[sum]){
            let sId = map[sum]
            let eId = i
            let dif = eId - sId

            max = Math.max(max, dif)

        }else if(sum == 0){
            let l = i+1
            max = Math.max(max, l)
        }else{
            map[sum] = i
        }
    }

    console.log(max)

}

solve([1, -2, 1, 2])
solve([3, 2, -1])
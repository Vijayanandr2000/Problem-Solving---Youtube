// Problem Description
// Given an array A of N integers.
// Find the count of the subarrays in the array which sums to zero. Since the answer can be very large, return the remainder on dividing the result with 109+7

// Problem Constraints
// 1 <= N <= 105
// -109 <= A[i] <= 109

// Input Format
// Single argument which is an integer array A.

// Output Format
// Return an integer.

// Example Input
// Input 1:
//  A = [1, -1, -2, 2]

// Input 2:
//  A = [-1, 2, -1]

// Example Output
// Output 1:
// 3

// Output 2:
// 1

// Example Explanation
// Explanation 1:
//  The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].

// Explanation 2:
//  The subarray with zero sum is [-1, 2, -1].


//  A = [1, -1, -2, 2]
// ps = [1,0,-2,0]

// count = 0+1+1+1 = 3
// {
//     1: 1,

//     0: 2,

//     -2: 1
// }


const solve = (a) => {
    //prefix sum
    // map if map found ? value of that key 
    //ps == 0 => count+1

    let ps = [a[0]]
    for(let i = 1 ; i < a.length ; i++){
        ps[i] = ps[i-1] + a[i]
    }
    // console.log(ps)

    let map = {}, count = 0
    for(let i = 0 ; i < ps.length ; i++){
        if(ps[i] == 0){
            count +=1
        }

        if(map[ps[i]]){
            count += map[ps[i]]
        }

        if(map[ps[i]]){
            map[ps[i]]++
        }else{
            map[ps[i]] = 1
        }
    }

    console.log(count)

}

solve([1, -1, -2, 2])
solve([-1, 2, -1])
solve([30,-30,30,-30])
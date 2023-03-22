// Problem Description
// Given an unsorted integer array, A of size N. Find the first missing positive integer.

// Note: Your algorithm should run in O(n) time and use constant space.



// Problem Constraints
// 1 <= N <= 1000000

// -109 <= A[i] <= 109



// Input Format
// First argument is an integer array A.



// Output Format
// Return an integer denoting the first missing positive integer.



// Example Input
// Input 1:

// [1, 2, 0]
// Input 2:

// [3, 4, -1, 1]
// Input 3:

// [-8, -7, -6]


// Example Output
// Output 1:

// 3
// Output 2:

// 2
// Output 3:

// 1


// Example Explanation
// Explanation 1:

// A = [1, 2, 0]
// First positive integer missing from the array is 3.

// 3, 4, -1, 1 => 1 - n+1 => n+ 2

// 3 4 6 1


// 3 4 -6 1

// 3 4 -6 -1

// -3 4 -6 -1

// i = 1 return i+1

const solve = (a) => {
    let n = a.length

    for(let  i = 0 ;  i< n ; i++){
        if(a[i] < 0){
            a[i] = n+2
        }
    }

    for(let  i = 0 ;  i <n ; i++){
        let t = Math.abs(a[i])

        a[t-1] = a[t-1]  < 0 ? a[t-1] : -1*a[t-1]


    }

    // console.log(a)

    for(let i = 0 ; i < n; i++){
        if(a[i] >= 0){
            console.log(i+1)
            return
        }
    }

    console.log(n+1)


}


solve([1, 2, 0])
solve([3, 4, -1, 1])
solve([-8, -7, -6])
solve([1,2,3])
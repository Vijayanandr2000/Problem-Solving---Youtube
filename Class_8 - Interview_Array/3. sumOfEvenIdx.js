// Problem Description
// You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to calculate the sum of all even indices in the range A[B[i][0]…B[i][1]].
// Note : Use 0-based indexing

// Problem Constraints
// 1 <= N <= 105
// 1 <= Q <= 105
// 1 <= A[i] <= 100
// 0 <= B[i][0] <= B[i][1] < N

// Input Format
// First argument A is an array of integers.
// Second argument B is a 2D array of integers.

// Output Format
// Return an array of integers.

// Examle Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [   [0,2] 
//         [1,4]   ]
// Input 2:
// A = [2, 1, 8, 3, 9]
// B = [   [0,3] 
//         [2,4]   ]


// Example Output
// Output 1:
// [4, 8]
// Output 2:
// [10, 17]


// Example Explanation
// For Input 1:
// The subarray for the first query is [1, 2, 3] whose sum of even indices is 4.
// The subarray for the second query is [2, 3, 4, 5] whose sum of even indices is 8.
// For Input 2:
// The subarray for the first query is [2, 1, 8, 3] whose sum of even indices is 10.
// The subarray for the second query is [8, 3, 9] whose sum of even indices is 17.


const solve = (a,q) => {
    let pse = [a[0]]

    for(let i = 1 ; i < a.length; i++) {
        if(i%2!=0){
            pse[i] = pse[i-1]
        }else{
            pse[i] = pse[i-1]+a[i]
        }
    }

    let res = []
    for(let i = 0 ; i < q.length; i++){
        let s = q[i][0], e = q[i][1];
        let ans = pse[e] - (s-1 >= 0 ? pse[s-1] : 0)
        res.push(ans)
    }

    console.log(res)
}

solve([1, 2, 3, 4, 5], [   [0,2], [1,4]   ])
solve([2, 1, 8, 3, 9], [   [0,3], [2,4]   ])
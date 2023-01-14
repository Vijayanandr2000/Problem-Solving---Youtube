// Problem Description
// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

// Problem Constraints
// 1 <= N, M <= 105
// 1 <= A[i] <= 109
// 0 <= L <= R < N

// Input Format
// The first argument is the integer array A.
// The second argument is the 2D integer array B.

// Output Format
// Return an integer array of length M where ith element is the answer for ith query in B.

// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [[0, 3], [1, 2]]

// Input 2:
// A = [2, 2, 2]
// B = [[0, 0], [1, 2]]

// Example Output
// Output 1:
// [10, 5]

// Output 2:
// [2, 4]

const prefixSum = (a) => {
    let ps = []

    ps[0] = a[0]

    for(let i = 1 ; i< a.length; i++){
        ps[i] = ps[i-1] + a[i]
    }

    return ps

}

const rangeSum = (a,q) => {
    let ans = []
    
    //FINDING PREFIX
    let ps = prefixSum(a)



    for(let i=0;i<q.length;i++){
        let s = q[i][0], e = q[i][1];

        let sum = ps[e] - (s-1 >= 0 ? ps[s-1] : 0)

        ans.push(sum)
    }
   
    console.log(ans)
}

rangeSum([1, 2, 3, 4, 5], [[0, 3], [1, 2]])
rangeSum([2, 2, 2],[[0, 0], [1, 2]])
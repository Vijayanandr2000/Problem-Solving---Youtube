// Problem Description
// You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to find the count of even numbers in the range A[B[i][0]…B[i][1]].

// Problem Constraints
// 1 <= N <= 105
// 1 <= Q <= 105
// 1 <= A[i] <= 109
// 0 <= B[i][0] <= B[i][1] < N

// Input Format
// First argument A is an array of integers.
// Second argument B is a 2D array of integers.

// Output Format
// Return an array of integers.


// Example Input
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
// [1, 2]

// Output 2:
// [2, 1]

const countEven = (a,q) => {
    let ps = [];

    for(let i = 0 ; i < a.length ; i++) {
        if(a[i] % 2 === 0){
            a[i] = 1
        }else{
            a[i] = 0
        }

        if(i==0){
            ps[i] = a[0]
        }else{
            ps[i] = ps[i-1] + a[i]
        }
    }

    // console.log(ps)

    let ans = []

    for(let i=0;i<q.length;i++){
        let s = q[i][0], e = q[i][1];

        let sum = ps[e] - (s-1 >= 0 ? ps[s-1] : 0)

        ans.push(sum)
    }
   
    console.log(ans)
}

countEven([1, 2, 3, 4, 5],[   [0,2] ,[1,4]   ])
countEven([2, 1, 8, 3, 9],[   [0,3] ,[2,4]   ])
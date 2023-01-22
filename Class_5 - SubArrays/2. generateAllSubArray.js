// Problem Description
// You are given an array A of N integers.
// Return a 2D array consisting of all the subarrays of the array

// Problem Constraints
// 1 <= N <= 100
// 1 <= A[i] <= 105

// Input Format
// First argument A is an array of integers.

// Output Format
// Return a 2D array of integers

// Example Input
// Input 1:
// A = [1, 2, 3]

// Input 2:
// A = [5, 2, 1, 4]

// Example Output
// Output 1:
// [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

// Output 2:
// [[1 ], [1 4 ], [2 ], [2 1 ], [2 1 4 ], [4 ], [5 ], [5 2 ], [5 2 1 ], [5 2 1 4 ] ]

const printOfAllSubArr = (a) => {
    let res = []

    for(let i = 0; i < a.length; i++){
        for(let j = i; j < a.length; j++){
            let ans = []
            for(let k = i ; k <= j ; k++){
                ans.push(a[k])
            }

            res.push(ans)

        }
    }
    console.log(res)

}

printOfAllSubArr([1,2,3])

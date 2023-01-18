// Problem Description
// Given an integer array A containing N distinct integers, you have to find all the leaders in array A.
// An element is a leader if it is strictly greater than all the elements to its right side.
// NOTE:The rightmost element is always a leader.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <= 108

// Input Format
// First and only argument is an integer array A.

// Output Format
// Return an integer array denoting all the leader elements of the array.
// NOTE: Ordering in the output doesn't matter.

// Example Input
// Input 1:
//  A = [16, 17, 4, 3, 5, 2]

// Input 2:
//  A = [1, 2]

// Example Output
// Output 1:
// [17, 2, 5]

// Output 2:
//  [2]


const learders = (a) => {
    let ans = []

    let max = a[a.length-1]

    ans.push(max)

    for(let i = a.length -2 ; i >= 0 ; i--) {
        if(max < a[i]){
            max = a[i]
            ans.push(max)
        }
    }

    console.log(ans)

}

learders([16, 17, 4, 3, 5, 2])
learders([1, 2])
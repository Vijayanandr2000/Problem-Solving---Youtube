// Problem Description
// Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <=109
// 1 <= B <= 109

// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer B.

// Output Format
// Return the array A after rotating it B times to the right

// Example Input
// Input 1:
// A = [1, 2, 3, 4]
// B = 2

// Input 2:
// A = [2, 5, 6]
// B = 1

// Example Output
// Output 1:
// [3, 4, 1, 2]

// Output 2:
// [6, 2, 5]


const rotateArr = (a,k) => {
    const reverseArray = (a,s,e) => {
        while(s<e){
            [a[s],a[e]] = [a[e],a[s]]
            s++;
            e--;
        }
    
        // console.log(a)
    }
    reverseArray(a,0,a.length-1)
    reverseArray(a,0,k-1)
    reverseArray(a,k,a.length-1)


    console.log(a)
} 

rotateArr([1, 2, 3, 4], 2)
rotateArr([2, 5, 6], 1)



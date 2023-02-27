// Problem Description
// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.
// If the answer does not exist return an array with a single element "-1".
// First sub-array means the sub-array for which starting index in minimum.

// Problem Constraints
// 1 <= length of the array <= 100000
// 1 <= A[i] <= 109
// 1 <= B <= 109

// Input Format
// The first argument given is the integer array A.
// The second argument given is integer B.

// Output Format
// Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".

// Example Input
// Input 1:
//  A = [1, 2, 3, 4, 5]
//  B = 5

// Input 2:
//  A = [5, 10, 20, 100, 105]
//  B = 110

// Example Output
// Output 1:
//  [2, 3]

// Output 2:
//  -1


// Example Explanation
// Explanation 1:
//  [2, 3] sums up to 5.

// Explanation 2:
//  No subarray sums up to required number.

// 1, 2, 3, 4, 5




// ps = 0 1 3 6 10 15

// {
//     0: 0
//     1: 1
//     3: 2
//     6: 3
//     10: 4
//     15: 5
// }

// 0+5 = 5
// 1+5 = 6
//  s map[1]
//  e = map[6]

//  5, 10, 20, 100, 105

//  ps= 0 5 15 35 135 240

//  {
//     0: 0
//     5: 1
//     15: 2
//     35: 3
//     135: 4
//     240: 5
//  }

//  o+110 = 110
//  5+110 = 115
//  15+115 = 140


//  sidx , eidx = not chnaged return -1

const solve = (a, b) => {
    let ps = [0]

    for(let i = 1 ; i <= a.length ; i++){
        ps[i] = a[i-1] + ps[i-1]
    }

    let map = {}
    for(let i = 0 ; i < ps.length ; i++){
        if(map[ps[i]] == undefined){
            map[ps[i]] = i
        }
    }


    let sIdx = -1, eIdx = -1
    for(let  i = 0 ; i < ps.length ; i++){
        let temp = ps[i] + b
        if(map[temp]){
            sIdx = map[ps[i]]
            eIdx = map[temp]
            console.log(a.slice(sIdx, eIdx))
            return 
        }
    }
    if(sIdx == -1 && eIdx == -1){
        console.log(-1)
        return
    }
   
}

solve([1, 2, 3, 4, 5], 5)
solve([5, 10, 20, 100, 105], 110)
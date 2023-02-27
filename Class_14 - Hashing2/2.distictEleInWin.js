// Problem Description
// You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.
// Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.
// NOTE: if B > N, return an empty array.

// Input Format
// First argument is an integer array A
// Second argument is an integer B.

// Output Format
// Return an integer array.

// Example Input
// Input 1:
//  A = [1, 2, 1, 3, 4, 3]
//  B = 3

// Input 2:
//  A = [1, 1, 2, 2]
//  B = 1

// Example Output
// Output 1:
//  [2, 3, 3, 2]

// Output 2:
//  [1, 1, 1, 1]


// Example Explanation
// Explanation 1:
//  A=[1, 2, 1, 3, 4, 3] and B = 3
//  All windows of size B are
//  [1, 2, 1]
//  [2, 1, 3]
//  [1, 3, 4]
//  [3, 4, 3]
//  So, we return an array [2, 3, 3, 2].

// Explanation 2:
//  Window size is 1, so the output array is [1, 1, 1, 1].


const solve = (a, b) => {
    // freqmap form length of SW
    // iterate ignore 1st ele add last elem 
    // find the len
    let map={}, res= []
    for(let i = 0 ; i < b ; i ++){
        if(map[a[i]]){
            map[a[i]]++
        }else{
            map[[a[i]]] = 1
        }
    }
    let len = Object.keys(map).length
    res.push(len)
    for(let i = 0, k = b ; k < a.length ; i++, k++){
        map[a[i]]--
        if(map[a[i]]==0){
            delete map[a[i]]
        }

        if(map[a[k]]){
            map[a[k]]++
        }else{
            map[[a[k]]] = 1
        }

        len = Object.keys(map).length
        res.push(len)
    }

    console.log(res)

}

solve([1, 2, 1, 3, 4, 3], 3)
solve([1, 1, 2, 2], 1)
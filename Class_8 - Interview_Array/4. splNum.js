// Problem Description
// Given an array of size N, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exists in the array.

// Problem Constraints
// 1 <= N <= 5*105
// 1 <= num[i] <= 109

// Input Format
// Only argument is an integer array.

// Output Format
// Return an integer.

// Example Input
// [2, 1, 2]

// Example Output
// 2

// Example Explanation
// 2 occurs 2 times which is greater than 3/2.

const solve = (a) => {

    let maj = null, lead =0
    for(let i = 0 ; i < a.length ; i++){
        if(maj == null){
            maj = a[i]
            lead++
        }else if(maj == a[i]){
            lead++
        }else{
            lead--
            if(lead == 0){
                maj = null
            }
        }
    }

    // console.log(maj)

    let mid =Math.floor(a.length / 2), freqMaj = 0
    for(let i = 0 ; i < a.length ; i++){
        if(maj == a[i]){
            freqMaj++
        }
        if(freqMaj > mid){
            console.log(maj)
            return
        }
    }

    console.log(-1)
    return

}

solve([2,1,2])
solve([3,4,3,5,6,3,3,3,4])
solve([1,2,3,4,5])
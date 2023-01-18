// Problem Description
// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.

// Problem Constraints
// 1 <= |A| <= 2000

// Input Format
// First and only argument is vector A

// Output Format
// Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array

// Example Input
// Input 1:
// A = [1, 3]

// Input 2:
// A = [2]

// Example Output
// Output 1:
//  2

// Output 2:
//  1

const findSmallSubArray = (a) => {
    let max = a[0], min = a[0]

    for(let i = 1 ; i < a.length; i++) {
        if(max < a[i]){
            max = a[i]
        }

        if(min > a[i]){
            min = a[i]
        }
    }

    let pos_max = -1, pos_min = -1, minDis = Infinity

    for(let i = 0 ; i < a.length; i++) {
        if(max === a[i]){
            pos_max = i
        }

        if(min === a[i]){
            pos_min = i
        }

        if(pos_max != -1 && pos_min != -1){
            minDis = Math.min(minDis, Math.abs(pos_max - pos_min) + 1)
        }

    }

    console.log(minDis)
}

findSmallSubArray([1, 3])
findSmallSubArray([2])
findSmallSubArray([1,2,2,1,1,2,3,4,2,1])

// 1,2,2,1,1,2,3,4,2,1 

// min = 4
// max = 7
// minDis = 4

// max = 7
// min = 9
// minDis = min (4,(9-7)+1) => min(4,3) =3

// max = 4 
// min = 1

// max == 4      min == 1
// pos_max = i   pos_min = i



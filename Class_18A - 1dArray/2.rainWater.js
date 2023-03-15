// Problem Description
// Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Problem Constraints
// 1 <= |A| <= 100000

// Input Format
// First and only argument is the vector A

// Output Format
// Return one integer, the answer to the question

// Example Input
// Input 1:
// A = [0, 1, 0, 2]

// Input 2:
// A = [1, 2]

// Example Output
// Output 1:
// 1

// Output 2:
// 0

// Example Explanation
// Explanation 1:
// 1 unit is trapped on top of the 3rd element.
// Explanation 2:
// No water is trapped.

// 0, 1, 0, 2

// leftmax = 0 1 1 2
// rigtmax = 2 2 2 2

// 0 - 0 = 0
// 1 - 1 = 0
// 1 - 0 = 1
// 2 - 2 = 0
// ----------
//         1

// 1 2
// 1 2
// 2 2

// 1 - 1 = 0
// 2 - 2 = 0


const solve = (a) => {
    let leftMax = [a[0]]

    for(let i = 1 ; i < a.length ; i++){
        leftMax[i] = leftMax[i-1] > a[i] ? leftMax[i-1] : a[i]
    }

    let rightMax = []
    rightMax[a.length-1] = a[a.length-1]
    for(let i = a.length-2 ; i >= 0 ; i--){
        rightMax[i] = rightMax[i+1] > a[i] ? rightMax[i+1] : a[i]
    }

    let sum = 0

    for(let  i = 0 ; i < a.length ; i++){
        let minHei = Math.min(leftMax[i], rightMax[i])
        let temp = minHei - a[i]

        sum += temp
    }

    console.log(sum)
    
    // console.log(leftMax, rightMax)

}

solve([0, 1, 0, 2])
solve([1, 2])



// Problem Description

// Given an array A of N integers. Count the number of elements that have at least 1 elements greater than itself.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <= 109

// Input Format
// First and only argument is an array of integers A.

// Output Format
// Return the count of elements.


// Example Input
// Input 1:
// A = [3, 1, 2]
// Input 2:
// A = [5, 5, 3]


// Example Output
// Output 1:
// 2  
// Output 2:
// 1


const solve = (a) => {
    //1. find Max num
    //2. find freq of max
    //3. arr length - freq(max)

    let max = a[0], freq = 0;


    for(let i=0;i<a.length;i++){
        if(a[i] > max){
            max = a[i];
            freq = 0;
        }
        if(a[i] == max){
            freq++;
        }
    }

    // console.log(max,freq)

    console.log(a.length - freq)
}

solve([3,1,2])
solve([5,5,2])



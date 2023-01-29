// Problem Description
// You are given an array A of N elements. Find the number of triplets i,j and k such that i<j<k and A[i]<A[j]<A[k]

// Problem Constraints
// 1 <= N <= 103
// 1 <= A[i] <= 109

// Input Format
// First argument A is an array of integers.

// Output Format
// Return an integer.

// Example Input
// Input 1:
// A = [1, 2, 4, 3]

// Input 2:
// A = [2, 1, 2, 3]

// Example Output
// Output 1:
// 2

// Output 2:
// 1


const solve = (a) =>{

    //1. iterate 1st idx to last-1 idx
    //2. find smaller ele in left
    //3. find larger ele in right
    //4. l*r
    //5. sum = sum + l*r

    let totalTriplets = 0
    for(let i = 1; i < a.length-1 ; i++){
        let l = 0, j = i-1
        while(j >= 0){
            if(a[j] < a[i]){
                l++
            }
            j--
        }

        let r = 0, k = i+1
        while(k < a.length){
            if(a[k] > a[i]){
                r++
            }
            k++
        }

        let triplet = l * r

        totalTriplets += triplet

    }

    console.log(totalTriplets)
}

solve([1, 2, 4, 3])
solve([2, 1, 2, 3])
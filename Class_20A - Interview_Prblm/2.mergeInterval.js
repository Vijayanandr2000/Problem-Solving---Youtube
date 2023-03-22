// Problem Description
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.



// Problem Constraints
// 0 <= |intervals| <= 105



// Input Format
// First argument is the vector of intervals

// second argument is the new interval to be merged



// Output Format
// Return the vector of intervals after merging



// Example Input
// Input 1:

// Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
// Input 2:

// Given intervals [1, 3], [6, 9] insert and merge [2, 6] .


// Example Output
// Output 1:

//  [ [1, 5], [6, 9] ]
// Output 2:

//  [ [1, 9] ]


// Example Explanation
// Explanation 1:

// (2,5) does not completely merge the given intervals
// Explanation 2:

// (2,6) completely merges the given intervals

const solve = (a, b) => {
    let result = []
    for(let  i = 0 ; i < a.length; i++) {

        if(a[i][1] < b[0]){
            result.push(a[i].slice());
        } else if(a[i][0] > b[1]){
            result.push(b.slice())
            while(i < a.length){
                result.push(a[i].slice());
                i++
            }

            console.log(result)
            return
        }else{
            b[0] = Math.min(b[0],a[i][0])
            b[1] = Math.max(b[1],a[i][1])
        }

    }

    result.push(b.slice());
    console.log(result);

    return

}
[1,5] [6,9]
solve([[1, 3], [6, 9]], [2, 5])
solve([[1, 3], [6, 9]], [2, 6])
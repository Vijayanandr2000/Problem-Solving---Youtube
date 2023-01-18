// Problem Description
// You have given a string A having Uppercase English letters.
// You have to find how many times subsequence "AG" is there in the given string.
// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

// Problem Constraints
// 1 <= length(A) <= 105

// Input Format
// First and only argument is a string A.

// Output Format
// Return an integer denoting the answer.

// Example Input
// Input 1:
//  A = "ABCGAG"

// Input 2:
//  A = "GAB"

// Example Output
// Output 1:
//  3

// Output 2:
//  0


const splPairs = (s) => {
    let countA = 0, agPairs = 0

    for(let i = 0 ; i < s.length; i++) {
        if(s[i] == 'A'){
            countA += 1
        }

        if(s[i] == 'G'){
            agPairs += countA
        }
    }

    console.log(agPairs)

}

splPairs("ABCGAG")
splPairs("GAB")